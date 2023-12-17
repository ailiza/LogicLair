/*
Leetcode 1274 - Number of Ships in a Rectangle
https://leetcode.com/problems/number-of-ships-in-a-rectangle/description/

Each ship is located at an integer point on the sea represented by a cartesian plane, and each integer point may contain at most 1 ship.

You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true If there is at least one ship in the rectangle represented by the two points, including on the boundary.

Given two points: the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle. It is guaranteed that there are at most 10 ships in that rectangle.

Submissions making more than 400 calls to hasShips will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.


Example :
Input: 
ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
Output: 3
Explanation: From [0,0] to [4,4] we can count 3 ships within the range.
Example 2:

Input: ans = [[1,1],[2,2],[3,3]], topRight = [1000,1000], bottomLeft = [0,0]
Output: 3
 

Constraints:
On the input ships is only given to initialize the map internally. You must solve this problem "blindfolded". In other words, you must find the answer using the given hasShips API, without knowing the ships position.
0 <= bottomLeft[0] <= topRight[0] <= 1000
0 <= bottomLeft[1] <= topRight[1] <= 1000
topRight != bottomLeft
*/


// Approach, use recursion and do divide and conquer. The hardest part is figuring out the coordinates for your rectangle
function countShips(sea, topRight, bottomLeft) {
    const [topX, topY] = topRight; //upper right corner (1000,1000)
    const [bottomX, bottomY] = bottomLeft; //lower left corner (0,0)

    //base case if the rectangle is invalid or if it doesn't have ships, return 0
    if (topX < bottomX ||
        topY < bottomY ||
        !sea.hasShips(topRight, bottomLeft)) {
        return 0;
    }

    //if we're down to a single point, it def has a ship
    if (topX === bottomX && topY === bottomY) {
        return 1;
    }

    //calculate midpoints to divide the rectangle into smaller rectangles
    const midX = Math.floor((topX + bottomX) / 2)
    const midY = Math.floor((topY + bottomY) / 2)

    return countShips(sea, [midX, midY], bottomLeft) + //lowerleft
        countShips(sea, topRight, [midX + 1, midY + 1]) + //upper right
        countShips(sea, [midX, topY], [bottomX, midY + 1]) + //upper left
        countShips(sea, [topX, midY], [midX + 1, bottomY]) //bottom right
};