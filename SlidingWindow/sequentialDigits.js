/*
Leetcode 1291 - Sequential Digits
https://leetcode.com/problems/sequential-digits/description/
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
*/

// Time: O(1) | Space O(1)
// The time is constant because the length of the sample string is 9 and the lengths of low and high are between 2-9. Hence the nested
//for loops are executed no more than 8x8=64 times
// Space is also constant to keep not more than 36 integers with sequential digits

var sequentialDigits = function (low, high) {
    const s = '123456789';
    const result = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let num = Number(s.slice(i, j + 1));
            if (num > high) break;
            if (low <= num) result.push(num);
        }
    }

    return result.sort((a, b) => a - b)
};