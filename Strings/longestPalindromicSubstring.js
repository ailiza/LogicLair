/*
  Leetcode 5
  https://leetcode.com/problems/longest-palindromic-substring/
  
  Write a function that, given a string, returns its longest palindromic
  substring.

  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

  You can assume that there will only be one longest palindromic substring.

  O(n^2) Time
  O(1) Space
*/

// Approach - DP
// Time O(n^2) declare a n * n table which is O(n^2) time
// Space O(n^2) because of dp table
var longestPalindrome = function(s) {
  let left = 0;
  let right = 0;
  const N = s.length;
  const dp = [...Array(N)].map(_ => new Array(N).fill(false));

  for (let i = N - 1; i >= 0; i--) {
      for (let j = i; j < N; j++) {
          if (s[i] === s[j]) {
              if (j - i <= 1) { //current distance is <= 1
                  dp[i][j] = true;
              } else if (dp[i + 1][j - 1]) { //what you've seen before is a smaller true palindrome
                  dp[i][j] = true;
              }                
          } 

          if (dp[i][j] && (j - i) > (right - left)) { //what you're looking at is true and your curr > prev L + R distance
              left = i;
              right = j;
          }
      }
  }


  return s.slice(left, right + 1);
};


// Approach expand from the center
// Time O(n^2) for each center O(n) we call expand O(n). The time complexity is the same as DP but the avg practical runtime is faster because most
//centers won't product palindromes, so most of the O(n) calls ot expand will cost far less than n iterations. Worst case scenario is when every char is the same in the s
// Space O(1)

var longestPalindrome = function(s) {
  function expand(left, right) {
      while (left >= 0 && s[left] === s[right]) { //this checks if we're within bounds
          if (maxString.length < right - left + 1) { //if we pass the previous check then we can 
            //update our maxString because we've found a new and longer palindrome than the previous one
              maxString = s.slice(left, right + 1);
          }
          //expand outwards
          left--;
          right++;
      }
  }
  
  let maxString = "";
  
  for (let i = 0; i < s.length; i++) {
      expand(i, i);
      expand(i, i + 1); //this is an edge case of even palindromes
  }
  
  return maxString;
};
/*
Manacher's Algorithm is a powerful technique that allows us to find the longest palindromic substring in a given string in linear time. Here's a detailed breakdown of the algorithm's approach:

1. String Transformation
We first transform the original string to simplify the algorithm. This transformation achieves two things:

It ensures that every potential center of a palindrome is surrounded by identical characters (#), which simplifies the process of expanding around a center.
It adds special characters ^ at the beginning and $ at the end of the string to avoid any boundary checks during the palindrome expansion. For instance, the string "babad" is transformed into "^#b#a#b#a#d#$".
2. Initialization
We maintain an array P with the same length as the transformed string. Each entry P[i] denotes the radius (half-length) of the palindrome centered at position i.

We also introduce two critical pointers:

C: The center of the palindrome that has the rightmost boundary.
R: The right boundary of this palindrome.
Both C and R start at the beginning of the string.

3. Iterating Through the String
For every character in the transformed string, we consider it as a potential center for a palindrome.

a. Using Previously Computed Information:
If the current position is to the left of R, its mirror position about the center C might have information about a palindrome centered at the current position. We can leverage this to avoid unnecessary calculations.

b. Expanding Around the Center:
Starting from the current radius at position i (which might be derived from its mirror or initialized to 0), we attempt to expand around i and check if the characters are the same.

c. Updating C and R:
If the palindrome centered at i extends beyond R, we update C to i and R to the new boundary.

4. Extracting the Result
Once we've computed the palindromic radii for all positions in the transformed string, we find the position with the largest radius in P. This position represents the center of the longest palindromic substring. We then extract and return this palindrome from the original string.

Complexity
Time complexity: O(n)
Manacher's algorithm processes each character in the transformed string once, making the time complexity linear.

Space complexity: O(n)
We use an array P to store the palindrome radii, making the space complexity linear as well.
*/

var longestPalindrome = function(str) {
  let s = "^#" + str.split("").join("#") + "#$";
  let N = s.length;
  let RADS = new Array(N).fill(0);
  let center = 0, 
      radius = 0;
  
  for (let i = 1; i < N - 1; i++) {
      RADS[i] = (radius > i) ? Math.min(radius - i, RADS[2*center - i]) : 0;
      while (s[i + 1 + RADS[i]] === s[i - 1 - RADS[i]])
          RADS[i]++;
      
      if (i + RADS[i] > radius) {
          center = i;
          radius = i + RADS[i];
      }
  }
  
  let max_len = Math.max(...RADS);
  let center_index = RADS.indexOf(max_len);
  return str.substring((center_index - max_len) / 2, (center_index + max_len) / 2);
}





function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;
  let substr = '';
  for (let i = 0; i < string.length; i++) {
    let evenPalindrome = isPalindrome(string, i, i + 1);
    let oddPalindrome = isPalindrome(string, i - 1, i + 1);
    let longest =
      evenPalindrome.length > oddPalindrome.length
        ? evenPalindrome
        : oddPalindrome;
    substr = longest.length > substr.length ? longest : substr;
  }
  return substr;
}

function isPalindrome(string, left, right) {
  let palindrome = string[(left + right) / 2] || '';
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;
    palindrome = string[left] + palindrome + string[right];
    left--;
    right++;
  }
  return palindrome;
}
