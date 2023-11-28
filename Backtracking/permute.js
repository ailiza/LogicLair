/*
Leetcode 46 - Permutations
https://leetcode.com/problems/permutations/description/

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

var permute = function(nums) {
    const used = new Set();
    const result = [];

    explore([]);

    return result; 
    
    function explore(tempArr) {
        if (tempArr.length === nums.length) {
            result.push([...tempArr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            let el = nums[i]

            if (used.has(el)) continue;

            tempArr.push(el)
            used.add(el)

            explore(tempArr)

            tempArr.pop()
            used.delete(el)
        }
    }
};