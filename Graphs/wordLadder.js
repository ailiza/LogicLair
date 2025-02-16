/*
Leetcode 127 Word Ladder
https://leetcode.com/problems/word-ladder/

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.


Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/

var ladderLength = function(beginWord, endWord, wordList) {
    const map = new Map() // pattern: [... all the words]
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const pattern = makePattern(word, i)
            if (!map.has(pattern)) map.set(pattern, new Set())
            map.get(pattern).add(word)
        }
    }

    let step = 1
    let queue = [beginWord]
    while (queue.length) {
        const nextGen = []
        for (const currWord of queue) {
            if (currWord === endWord) return step

            for (let i = 0; i < currWord.length; i++) {
                const pattern = makePattern(currWord, i)
                if (map.has(pattern)) {
                    nextGen.push(...Array.from(map.get(pattern)))
                    map.delete(pattern)
                }
            }
        }
        queue = nextGen
        step++
    }
    return 0
}

function makePattern(word, i) {
    return word.slice(0, i) + "*" + word.slice(i + 1)
}