/*
Leetcode 286 - Walls and Gates
https://leetcode.com/problems/walls-and-gates/description/

You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

 

Example 1:


Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
Example 2:

Input: rooms = [[-1]]
Output: [[-1]]
*/

// Time: O(mn) | Space: O(mn) for q size

var wallsAndGates = function (rooms) {
    const WALL = -1;
    const GATE = 0;
    const EMPTY_ROOM = 2 ** 31 - 1;
    const m = rooms.length;
    const n = rooms[0].length;
    let queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === GATE) {
                queue.push([i, j]);
            }
        }
    }

    const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift()

            for (let [r, c] of DIR) {
                let newX = x + r;
                let newY = y + c;

                if (isValid(newX, newY)) {
                    rooms[newX][newY] = rooms[x][y] + 1
                    queue.push([newX, newY])
                }
            }
        }
    }

    function isValid(x, y) {
        if (x < 0 ||
            y < 0 ||
            x >= m ||
            y >= n ||
            rooms[x][y] !== EMPTY_ROOM) {
            return false;
        }
        return true;
    }
};