/*
Leetcode 676 - Implement Magic Dictionary
https://leetcode.com/problems/implement-magic-dictionary/description/

Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.
 

Example 1:

Input
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]

Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
magicDictionary.search("hell"); // return False
magicDictionary.search("leetcoded"); // return False
*/

class MagicDictionary {
    constructor() {
        this.set = new Set();
    }

    buildDict(dictionary) {
        dictionary.forEach(x => this.set.add(x))
    }
    search(searchWord) {
        for (const currWord of this.set) {
            if (currWord.length !== searchWord.length) continue;
            let count = 0;
            for (let i = 0; i < searchWord.length; i++) {
                const currChar = currWord[i]
                const searchChar = searchWord[i]
                if (currChar !== searchChar) {
                    count++;
                }
                if (count > 1) break;

            }
            if (count === 1) return true;
        }
        return false;
    }
}