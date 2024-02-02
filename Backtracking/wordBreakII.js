/*
Leetcode 140 - Word Break II
https://leetcode.com/problems/word-break-ii/description/
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
Example 2:

Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
*/

var wordBreak = function(s, wordDict) {
    const result = [];
    const wordSet = new Set(wordDict)
    backtrack(s, wordSet, [], result);
    return result;
}

const backtrack = (s, wordSet, tempArr, result) => {
    if (s.length === 0) {
        result.push(tempArr.join(' '))
        return;
    }
    for (let i = 1; i <= s.length; i++) {
        const currWord = s.slice(0, i)
        if (wordSet.has(currWord)) {
            tempArr.push(currWord)
            backtrack(s.slice(i), wordSet, tempArr, result)
            tempArr.pop();
        }
    }
}