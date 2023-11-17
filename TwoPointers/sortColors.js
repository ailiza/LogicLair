/*
Leetcode 75 - Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.


Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/

var sortColors = function(nums) {
    let curr = 0;
    let p0 = 0;
    let p2 = nums.length - 1;
    
    //the flow is to make sure 0 is in the beginning, then check for red to make it at the end, if it's neither, move curr up until it breaks the while loop
    while (curr <= p2) {
        let currEl = nums[curr];

        if (currEl === 0) {
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
            p0++;
            curr++;
        } else if (currEl === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
            p2--;
        } else {
            curr++;
        }
    }
};