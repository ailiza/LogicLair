/*
Given a grid that represents a maze, filled with different letters
m (1) = mouse
w (>1) = walls
c (1) = cheese
x (>1) = clear path

return t/f
ex.
m x
w c
return true

Approach DFS Like
Time: O(n)
Space: O(n)
*/

function mousePath(grid) {
    const DIR = [[0,1], [0,-1], [1,0], [-1,0]]
    const MOUSE = 'm';
    const CHEESE = 'c';
    const WALL = 'w';
    const visited = new Set();
    
  
    function explore(row, col) { //1,1
      if (grid[row][col] === CHEESE) return true;
      if (
        row < 0 ||
        col < 0 ||
        row >= grid.length ||
        col >= grid[row].length ||
        visited.has(`${row},${col}`) ||
        grid[row][col] === WALL
      ) {
        return false;
      }
  
      visited.add(`${row},${col}`)
      
      for (let [x, y] of DIR) {
        let newRow = x + row;
        let newCol = y + col;
        if (explore(newRow, newCol)) {//if a path is found
          return true;
        }
      }
      
      return false; //if no path is found
    }
  
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === MOUSE && !visited.has(`${row},${col}`)) {
          return explore(row, col);
        }
      }
    }
  }
    let matrix = [['m', 'x'],
      ['w', 'c']]
  
    console.log(mousePath(matrix))