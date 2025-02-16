/*
Leetcode 41
https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.


Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

var firstMissingPositive = function(nums) {
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i]] !== nums[i]) {
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];               
        } else {
            i++;
        }
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    
    return i;
};