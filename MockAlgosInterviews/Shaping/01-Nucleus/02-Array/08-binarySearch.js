/*
Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.

Note:
• Indexes (indices) follow the zero-based numbering rule (i.e. the index of the first element of an array is 0, not 1).
• Other versions of this problem sometimes return true or false, the item being found in the array or not.

Examples:
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1

Time <= 3 min
*/

// O(logN) time
function binarySearch(array, target) {
    let first = 0;
    let last = array.length - 1;
    let targetIndex = -1;
    let middle;
 
    while (targetIndex === -1 && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] === target) {
            targetIndex = middle;
        } else if (array[middle] > target) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return targetIndex;
}

// Alternative way to write it
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] > target) {
        right = mid - 1;
      } else {
        left = left + 1;
      }
    }
    return -1;
  }