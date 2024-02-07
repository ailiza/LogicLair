/*
Leetcode 76 - Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/description/?envType=daily-question&envId=2024-02-04

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

var minWindow = function(s, t) {
    const tMap = new Map();
    for (const char of t) tMap.set(char, (tMap.get(char) || 0) + 1)
    const tCount = tMap.size

    const sMap = new Map()
    let sCount = 0;

    let mss = ""
    let start = 0

    for (let end = 0; end < s.length; end++) {
        const char = s[end]

        if (tMap.has(char)) sMap.set(char, (sMap.get(char) || 0) + 1)
        if (sMap.has(char) && tMap.get(char) === sMap.get(char)) sCount++

        while (sCount === tCount) {
            if (!mss || (end - start + 1) < mss.length) mss = s.slice(start, end + 1)
            const ch = s[start]

            const tMapVal = tMap.get(ch)
            const sMapVal = sMap.get(ch)

            if (tMapVal > sMapVal - 1) sCount--

            if (sMapVal === 1) sMap.delete(ch)
            else sMap.set(ch, sMapVal - 1)

            start++
        }
    }

    return mss
};