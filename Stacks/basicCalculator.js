/*
Leetcode 224 - Basic Calculator
https://leetcode.com/problems/basic-calculator/

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/
var calculate = function(s) {
    s.replace(/\s/g, '');
    let runningSum = 0;
    let sign = 1;
    const stack = []; //stack holds numbers and sign when you come across and open parenthesis

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char >= '0' && char <= '9') {
            let bigNum = char;
            while (s[i+1] >= '0' && s[i+1] <= '9') {
                bigNum += s[i + 1]
                i++
            }
            runningSum += Number(bigNum) * sign;
            sign = 1;
        } else if (char === '(') {
            stack.push(runningSum);
            stack.push(sign);
            runningSum = 0;
            sign = 1;
        } else if(char === ')') {
            runningSum *= stack.pop();
            runningSum += stack.pop();
        } else if (char === '-') {
            sign = -1;
        }
    }

    return runningSum;
};
