/*
Leetcode 293 - Flip Game
https://leetcode.com/problems/flip-game

You are playing a Flip Game with your friend.

You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].

 

Example 1:

Input: currentState = "++++"
Output: ["--++","+--+","++--"]
Example 2:

Input: currentState = "+"
Output: []
*/

// Time: O(n^2) | Space: O(1) - for space we iterate over all n-1 indicies of currentState string and for each index, we may create the enxt
//state string, which takes O(n) time. Thus for all indices, this approach will take o(n^2) time

var generatePossibleNextMoves = function(s) {
    const result = []

    for (let i = 1; i < s.length; i++) {
        const prev = s[i-1]
        const curr = s[i]
        if (prev === '+' && curr === "+") {
            const front = s.slice(0, i - 1)
            const back = s.slice(i + 1)
            const flipped = front + "--" + back
            result.push(flipped)
        }
    }

    return result
};