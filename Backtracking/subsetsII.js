/*
Leetcode 90 - Subsets II
https://leetcode.com/problems/subsets-ii/description/
Given an integer array nums that may contain duplicates, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
*/

var subsetsWithDup = function(nums) {
    const numsCopy = [...nums].sort();
    const result = [];

    function explore(tempArr, idx) {
        result.push([...tempArr]);

        for (let i = idx; i < nums.length; i++) {
            let currEl = numsCopy[i];
            let prevEl = numsCopy[i - 1];

            if (i > idx && currEl === prevEl) {
                continue;
            }

            tempArr.push(currEl);
            explore(tempArr, i + 1);
            tempArr.pop();
        }
    }

    explore([], 0);
    return result;
};

        /*
        1  2  2
              i
          idx  
        */