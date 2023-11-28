/*
Leetcode 78 - Subsets
https://leetcode.com/problems/subsets/description/

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
*/


// Backtracking
// Time: O(N X 2^N) to generate all subsets and then copy them into output list 
// Space: O(N) for tempArr that we're using
var subsets = function(nums) {
    const result = [];

    function explore(tempArr, idx) {
        result.push([...tempArr]); 

        for (let i = idx; i < nums.length; i++) {
            let el = nums[i];
            tempArr.push(el);
            explore(tempArr, i + 1);
            tempArr.pop();
        }
    }

    explore([], 0);

    return result;
};