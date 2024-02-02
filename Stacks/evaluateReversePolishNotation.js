/*
Leetcode 150 - Evaluation Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/

var evalRPN = function(tokens) {
    const OPERATION = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => ~~(a/b)
    }

    const stack = [];
    let a, b;

    for (let el of tokens) {
        if (OPERATION[el] !== undefined) {
            b = stack.pop();
            a = stack.pop();
            stack.push(OPERATION[el](a, b))
        } else {
            stack.push(+el)
        }
    }
    return stack.pop();
};