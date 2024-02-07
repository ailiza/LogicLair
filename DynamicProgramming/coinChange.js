/*
Leetcode 322 - Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

// Time: O(amount * denomination count of coins) | Space: O(amount) for the memoization table
var coinChange = function(coins, totalAmount) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const dp = new Array(totalAmount + 1).fill(MAX);
    dp[0] = 0;
    
    for (let currAmount = 1; currAmount < totalAmount + 1; currAmount++) {
        for (const coin of coins) {
            if (currAmount - coin >= 0) {
                const change = dp[currAmount - coin] + 1 //converts cents to #coins
                dp[currAmount] = Math.min(dp[currAmount], change)
            }
        }
    }
    if (dp[totalAmount] === MAX) return -1;
    return dp[totalAmount];
};
