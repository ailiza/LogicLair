/*
Leetcode 953 - Verifying an Alien Dictionary
https://leetcode.com/problems/verifying-an-alien-dictionary/description/

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
*/

var isAlienSorted = function (words, order) {
    const map = new Map();
    order.split('').forEach((char, i) => map.set(char, i))

    for (let i = 1; i < words.length; i++) {
        if (isInOrder(words[i - 1], words[i], map)) continue
        return false;
    }
    return true;

    function isInOrder(a, b, map) {
        const aLen = a.length;
        const bLen = b.length;
        const minLen = Math.min(aLen, bLen)

        for (let i = 0; i < minLen; i++) {
            const aOrder = map.get(a[i])
            const bOrder = map.get(b[i])
            if (aOrder === bOrder) continue
            return aOrder < bOrder
        }

        return aLen <= bLen
    }
}