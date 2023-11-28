/*
Leetcode 994 - Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/

//treat it as a level by level order traversal
var orangesRotting = function(grid) {
    let queue = [];
    let minutes = 0;
    let fresh = 0;
    const m = grid.length;
    const n = grid[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]]
    const ROTTEN = 2;
    const FRESH = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let el = grid[i][j]
            if (el === FRESH) fresh++
            if (el === ROTTEN) queue.push([i, j])
        }
    }

    while (fresh > 0 && queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            for (const [r, c] of DIR) {
                let newX = x + r;
                let newY = y + c;

                if (isValid(newX, newY) && grid[newX][newY] === FRESH) {
                    grid[newX][newY] = ROTTEN;
                    queue.push([newX, newY])
                    fresh--;
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;


    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < m && y < n;
    }
};




//mutating original input to save space. grid[newX][newY] = grid[x][y] - 1. at the end, loop through grid to find minimum minutes cuz it's all neg
// and return -min

var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const ROTTEN = 2;
    const FRESH = 1;
    const EMPTY = 0;

    const queue = []
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            const el = grid[i][j]
            if (el === ROTTEN) {
                queue.push([i,j])
                grid[i][j] = EMPTY;
            }
        }
    } 
    

    const DIR = [[1,0], [-1,0], [0,-1], [0,1]]

    while (queue.length) {
        let [x, y] = queue.shift()
        
        for (const [r, c] of DIR) {
            let newX = r + x;
            let newY = c + y;
            if (isValid(newX, newY) && grid[newX][newY] === FRESH) {
                grid[newX][newY] = grid[x][y] - 1
                queue.push([newX, newY])
            }
        }
    }

    let minutes = 0
    //check grid at the end for any fresh oranges left
    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            const el = grid[x][y]
            if (el === FRESH) {
                return -1
                }
            if (el !== EMPTY) {
                minutes = Math.min(minutes, grid[x][y])
                }
        }
    }
    
    return -minutes;



    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < m && y < n;
    }
};

/**
[[2,1,1],
 [1,1,0],
 [0,1,1]]
*/

// Solution 1: BFS Simulation
// Time: O(n) | Space: O(n)
const orangesRotting = function(grid) {
  // Record the state of the grid using two hash sets for quick lookup
  const freshOranges = new Set();
  let rottenOranges = new Set();
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] === 1) {
              freshOranges.add(`${row}${col}`);
          } else if (grid[row][col] === 2) {
              rottenOranges.add(`${row}${col}`);
          }
      }
  }

  // Simulate the rotting of oranges in the sets
  let minutes = 0;
  const directions = [[1,0], [0, 1], [-1, 0], [0, -1]];

  while (freshOranges.size > 0) {
      const infectedOranges = new Set();
      for (const coords of rottenOranges.keys()) {
          // Nice way to convert from a string to a number
          const row = coords[0] - '0';
          const col = coords[1] - '0';
          for (const direction of directions) {
              const nextRow = row + direction[0];
              const nextCol = col + direction[1];
              const key = `${nextRow}${nextCol}`;
              if (freshOranges.has(key)) {
                  freshOranges.delete(key);
                  infectedOranges.add(key);
              }
          }
      }

      if (infectedOranges.size === 0) return -1;

      rottenOranges = infectedOranges;
      minutes++;
  }
  return minutes;
};
