/*
Given an unsorted array, return the number of unique elements that appear only once in the array.

Examples:
• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)
• Given an array: [1] // returns 1 (unique element: 1)

Time <= 1 min
*/

// O(N) time - one pass
function numUniques(array) {
    const counts = new Map();
    let numberOfUniques = 0;
  
    for (const el of array) {
      const count = (counts.get(el) || 0) + 1;
      counts.set(el, count);
  
      if (count === 1) {
        numberOfUniques++;
      } else if (count === 2) {
        numberOfUniques--;
      }
    }
    return numberOfUniques;
  }
  
  
  // Test Cases
  console.log(numUniques([])) // 0
  console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
  console.log(numUniques([1])) // 1


// Alternative solution with 2 for loops
function numUniques(array) {
    const map = new Map();
  
    for (const el of array) {
      map.set(el, (map.get(el) || 0) + 1);
    }
  
    let count = 0;
  
    for (const [num, freq] of map) {
      if (freq === 1) count++;
    }
    return count;
  }