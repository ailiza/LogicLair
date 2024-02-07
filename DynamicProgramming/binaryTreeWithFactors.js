/*
Leetcode 823 - Binary Trees With Factors
https://leetcode.com/problems/binary-trees-with-factors/description/
Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
*/

// Time: O(n^2) from the 2 for loops || Space: O(n) for the dp

var numFactoredBinaryTrees = function(arr) {
    const MOD = 10**9 + 7;
    const dp = new Map(); // val : # of ways for each val
    arr.sort((a, b) => a - b).forEach(val => dp.set(val, 1));

    for (let i = 1; i < arr.length; i++) {
        const parent = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            const left = arr[j];
            if (parent % left) continue; //if the number doesn't divide

            const right = parent/left;
            if (!dp.has(right)) continue; //if the complimentary number doesn't exist

            const waysToLeft = dp.get(left);
            const waysToRight = dp.get(right);
            const totalWays = waysToLeft * waysToRight;

            dp.set(parent, dp.get(parent) + totalWays);
        }
    }

    const totalTrees = [...dp.values()].reduce((acc, curr) => acc + curr, 0);
    return totalTrees % MOD;
};