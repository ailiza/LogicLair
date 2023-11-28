/*
Leetcode 34 - Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. 

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

var searchRange = function(nums, target) {
    function binarySearch(isLeft) {
        let left = 0;
        let right = nums.length - 1;
        let func = isLeft ? Math.floor : Math.ceil;
        let idx = -1;

        while (left <= right) {
            let mid = func((left + right) / 2);
            let possible = nums[mid];

            if (possible > target) {
                right = mid - 1;
            } else if (possible < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return idx;
    }

    return [
        binarySearch(true),
        binarySearch(false)
    ]
};