/*
Leetcode 91 - Decode Ways
https://leetcode.com/problems/decode-ways/description/

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.


Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
*/

var numDecodings = function (s) {
    const SECOND_NUM = new Set(['0', '1', '2', '3', '4', '5', '6'])
    const dp = new Array(s.length + 1).fill(0);
    dp[s.length] = 1;

    for (let i = s.length - 1; i >= 0; i--) {
        const el = s[i]
        if (el === '0') dp[i] = 0
        else dp[i] = dp[i + 1]

        const secondChar = s[i + 1]
        if (i + 2 <= s.length &&
            el === '1' || el === '2' &&
            SECOND_NUM.has(secondChar)) {
            dp[i] += dp[i + 2]
        }
    }
    return dp[0]
}

/*
1   1   1   0   6
0   0   0   0   0   1                

a = 1
z = 26
*/