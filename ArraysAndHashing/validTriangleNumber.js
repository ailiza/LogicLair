/*
Leetcode 611 - Valid Triangle Number
https://leetcode.com/problems/valid-triangle-number/description/

Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Example 2:
Input: nums = [4,2,3,4]
Output: 4
*/
// Approach - sort and use 3 pointers for o(n^2) which is better than brute force of o(n^3)
// Note a property for a triangle is that a + b > c
var triangleNumber = function(nums) {
    const numsCopy = [...nums].sort((a, b) => a - b);
    let count = 0;

    for (let curr = numsCopy.length - 1; curr >= 2; curr--) {
        let low = 0;
        let high = curr - 1;

        while (low < high) {
            if (numsCopy[low] + numsCopy[high] > numsCopy[curr]) {
                count += (high - low);
                high--;
            } else {
                low++;
            }
        }
    }

    return count;
};