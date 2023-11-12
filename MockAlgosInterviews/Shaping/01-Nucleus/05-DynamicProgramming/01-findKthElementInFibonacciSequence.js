/*
Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.

Examples:
Input: k = 2
Output: 2
Explanation:
fib(2) = fib(0) + fib(1) = 1 + 1 = 2

Time <= 2 min
*/

// Shaping Solution
// O(n) time
function fib(k) {
    if (k <= 1) return 1;
  
    let prev = 1;
    let curr = 1;
  
    for (let i = 2; i < k + 1; i++) {
      [prev, curr] = [curr, prev + curr];
    }
  
    return curr;
  }

// Recursive Solution to compare to the DP solution because this requires the stack
function fib(k) { // number -> number
    if (k === 1 || k === 0) return 1;
  
    return fib(k - 1) + fib(k - 2)
}
  
  // Test Cases
  console.log(fib(0)) // 1
  console.log(fib(5)) // 8
  console.log(fib(11)) // 144