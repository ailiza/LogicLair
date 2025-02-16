/*
Leetcode 733 - Flood Fill
ttps://leetcode.com/problems/flood-fill/submissions/
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 
*/
//BFS
var floodFill = function (image, sr, sc, color) {
  const ogColor = image[sr][sc]
  if (ogColor === color) return image;
  image[sr][sc] = color;
  let queue = [[sr, sc]]
  const DIR = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  while (queue.length) {
      let size = queue.length;
      let nextGen = []

      for (let i = 0; i < size; i++) {
          let [currX, currY] = queue.shift();

          for (let [x, y] of DIR) {
              let newX = currX + x
              let newY = currY + y
              if (isValid(newX, newY)) {
                  if (image[newX][newY] === ogColor) {
                      nextGen.push([newX, newY])
                      image[newX][newY] = color
                  }
              }
          }
      }
      queue = nextGen;
  }
  return image

  function isValid(x, y) {
      if (x < 0 ||
          y < 0 ||
          x >= image.length ||
          y >= image[0].length) {
          return false;
      }
      return true;
  }
}





// Time: O(n) | Space: O(n)
const floodFill = function(image, sr, sc, newColor) {
  let stack = [[sr, sc]];
  let originalColor = image[sr][sc];
  if (originalColor === newColor) return image;

  while(stack.length) {
    let [row, col] = stack.pop();
    let val = image[row][col];
    if(val === originalColor) {
       image[row][col] = newColor;

      if(checkNeighbors(image, row + 1, col, originalColor)) stack.push([row + 1, col])
      if(checkNeighbors(image, row - 1, col, originalColor)) stack.push([row - 1, col])
      if(checkNeighbors(image, row, col + 1, originalColor)) stack.push([row, col + 1])
      if(checkNeighbors(image,  row, col - 1, originalColor)) stack.push([row, col - 1])
    }
  }

  return image;
}

function checkNeighbors(image, row, col, originalColor) {
  if(row < image.length && row >= 0 && col < image[0].length && col >= 0) {
      if(image[row][col] === originalColor){
        return true;
      }
  }
  return false;
}
