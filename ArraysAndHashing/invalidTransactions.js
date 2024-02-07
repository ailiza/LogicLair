/*
Leetcode 1169 - Invalid Transactions
https://leetcode.com/problems/invalid-transactions/description/
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
*/

var invalidTransactions = function (transactions) {
    const map = new Map(); //name: [{time, city}]
    const result = []
    for (const t of transactions) {
        const [name, time, amount, city] = t.split(',')
        const obj = { time: time, city: city }
        if (!map.has(name)) map.set(name, [obj])
        else map.get(name).push(obj)
    }

    for (const t of transactions) if (isBad(t, map)) result.push(t)

    return result
}

function isBad(t, map) {
    const [name, time, amount, city] = t.split(',')
    if (amount > 1000) return true
    const hx = map.get(name)
    for (const obj of hx) {
        if (city !== obj.city &&
            Math.abs(time - obj.time) <= 60) {
                return true
            }
    }
    return false
}