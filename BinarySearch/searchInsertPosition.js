/*
Leetcode 35 Search Insert Position
https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/*Alternative approach to binary search where you're looking for the boundaries instead of target
step 1: divide the search space into things that are too high and thigns that are too low
step 2: decide which side to put the equals on
sometimes it doesn't matter, but we can pick based on the side that will be the answer
step 3: pick a low and hi that satisfy the rule from before

nums[lo] < target <= nums[hi]
while low + 1 !== hi
mid = (low + hi) //2
if nums[mid] < target: low = mid
else hi = mid

when we don't find the target, we would return the high side

target = 4
1	3	5	6

low side: all the indexes where nums[index] < target
high side: all indexes where nums[index] >= target

low side: all sides <= 1
hi side: all indexes >= 2
*/
var searchInsert = function (nums, target) {
  let lo = -1;
  let hi = nums.length;

  while (lo + 1 < hi) {
      let mid = Math.floor((lo + hi) / 2)
      if (nums[mid] < target) {
          lo = mid;
      }
      else {
          hi = mid;
      }
  }

  return hi
};



var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let possible = nums[mid];

        if (possible === target) {
          return mid;
        } else if (target < possible) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
    }

    return left;
};