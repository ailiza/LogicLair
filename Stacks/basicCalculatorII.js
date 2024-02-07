/*
Leetcode 227 - Basic Calculator II
https://leetcode.com/problems/basic-calculator-ii/description/

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5
*/

var calculate = function (s) {
    s.replace(/\s/g, '');
    let runningNum = "" //string
    let stack = [];
    let prevSign = '+'

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!isNaN(char)) {
            runningNum += char;
        }
        if (isNaN(char) || i === s.length - 1) {
            if (prevSign == "+") {
                stack.push(Number(runningNum));
            } else if (prevSign == "-") {
                stack.push(Number(-runningNum));
            } else if (prevSign == "*") {
                stack.push(Math.floor(stack.pop() * runningNum));
            } else {
                stack.push(Math.trunc(stack.pop() / runningNum))
            }
            prevSign = char;
            runningNum = "";
        }
    }
    return stack.reduce((a, b) => a + b);
};