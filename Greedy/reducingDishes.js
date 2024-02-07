/*
Leetcode 1402 - Reducing Dishes
https://leetcode.com/problems/reducing-dishes/description/

A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].

Return the maximum sum of like-time coefficient that the chef can obtain after preparing some amount of dishes.

Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

 

Example 1:

Input: satisfaction = [-1,-8,0,5,-9]
Output: 14
Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
Each dish is prepared in one unit of time.
Example 2:

Input: satisfaction = [4,3,2]
Output: 20
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
Example 3:

Input: satisfaction = [-1,-4,-5]
Output: 0
Explanation: People do not like the dishes. No dish is prepared.
*/

var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b)
    let suffixSum = 0
    let maxSatScore = 0

    for (let i = satisfaction.length - 1; i >= 0 && suffixSum + satisfaction[i] > 0; i--) {
        suffixSum += satisfaction[i]
        maxSatScore += suffixSum
    }
    return maxSatScore
};

/*
[-1,-8,0,5,-9]
[-9,-8,-1,0,5]

            1 -> 5
          1 2 -> 10
        1 2 3 -> 15 + 0 + -1 = 14
      1 2 3 4 -> 20 + 0 + -2 + -8 = 10
*/