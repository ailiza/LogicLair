/*
Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.
In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).
Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.
Make sure your algorithm is efficient, and analyze its time and space complexities.

Examples:
input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
*/

function root(answer, power) { //base ^ pow = answer and we're looking for the base
    if (root === 0) {
      return 0;
    }
    
    let low = 0;
    let high = Math.max(answer, 1);
    let mid = (low + high) / 2;
    
    while (mid - low >= 0.001) {
      if (Math.pow(mid, power) < answer) {
        low = mid;
      } else if (Math.pow(mid, power) > answer) {
        high = mid;
      } else {
        break;
      }
      mid = (low + high) / 2;
    }
    
    return mid.toFixed(3);
  }