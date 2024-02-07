/*
Leetcode 658 - Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
*/

// Approach: Binary search to find the left bound
//Time complexity: O(log⁡(N−k)+k)
//Although finding the bounds only takes O(log⁡(N−k)time from the binary search, it still costs us O(k) to build the final output.
//Both the Java and Python implementations require O(k) time to build the result. However, it is worth noting that if the input array were given as a list instead of an array of integers, then the Java implementation could use the ArrayList.subList() method to build the result in O(1) time. If this were the case, the Java solution would have an (extremely fast) overall time complexity of O(log⁡(N−k).

var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const rightDistance = arr[mid + k] - x;
        const leftDistance = x - arr[mid];

        if (rightDistance < leftDistance) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const result = [];
    for (let i = left; i < left + k; i++) {
        result.push(arr[i])
    }
    return result;
};