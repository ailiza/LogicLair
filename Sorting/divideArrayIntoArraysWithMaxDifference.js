/*
Leetcode 2966 - Divide Array Into Arrays With Max Difference
https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2024-02-01

You are given an integer array nums of size n and a positive integer k.

Divide the array into one or more arrays of size 3 satisfying the following conditions:

Each element of nums should be in exactly one array.
The difference between any two elements in one array is less than or equal to k.
Return a 2D array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.


Example 1:
Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
Output: [[1,1,3],[3,4,5],[7,8,9]]
Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important.

Example 2:
Input: nums = [1,3,3,2,7,3], k = 3
Output: []
Explanation: It is not possible to divide the array satisfying all the conditions.
*/

/**
 * Divide Array Into Arrays With Max Difference
 * Given an array of integers nums and an integer k, divide the array into subarrays of size 3,
 * such that the difference between the maximum and minimum element in each subarray is at most k.
 * If it's not possible to achieve this, return an empty array.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} k - The maximum allowed difference between the maximum and minimum elements.
 * @return {number[][]} - Array of subarrays meeting the criteria.
 */
const divideArray = function(nums, k) {
    // Step 1: Sort the input array in ascending order.
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the result array to store subarrays meeting the criteria.
    let result = [];

    // Step 3: Iterate through the sorted array with a step of 3.
    for (let i = 2; i < nums.length; i += 3) {
        // Step 4: Check if the difference between the maximum and minimum elements in the current subarray is within the allowed limit (k).
        if (nums[i] - nums[i - 2] > k) {
            // If not, return an empty array as it's not possible to meet the criteria.
            return [];
        }

        // Step 5: Push the current subarray into the result array.
        result.push([nums[i - 2], nums[i - 1], nums[i]]);
    }

    // Step 6: Return the final result array containing subarrays meeting the criteria.
    return result;
};