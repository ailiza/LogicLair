/*
Leetcode 849 - Maximize Distance to Closest Person

You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to the closest person.


Example 1:


Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
Example 3:

Input: seats = [0,1]
Output: 1
*/

//we care only about the taken seats. we use firstTakenSeat and lastTakenSeatWeSaw to deal with edge cases, which is if the first or last seat is empty

var maxDistToClosest = function (seats) {
    const TAKEN = 1;
    const EMPTY = 0;
    let firstTakenSeat = null;
    let lastTakenSeatWeSaw = null;
    let max = 0;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === TAKEN) {
            if (firstTakenSeat === null) {
                firstTakenSeat = i;
            }

            if (lastTakenSeatWeSaw !== null) {
                let tempDistance = i - lastTakenSeatWeSaw;
                max = Math.max(max, Math.floor(tempDistance / 2));
            }

            lastTakenSeatWeSaw = i;
        }
    }

    let firstSeat = seats[0];
    let lastSeat = seats[seats.length - 1];

    if (firstSeat === EMPTY) {
        max = Math.max(max, firstTakenSeat);
    }

    if (lastSeat === EMPTY) {
        max = Math.max(max, seats.length - 1 - lastTakenSeatWeSaw);
    }
    return max;
};