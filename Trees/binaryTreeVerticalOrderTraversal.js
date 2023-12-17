/*
Leetcode 314
https://leetcode.com/problems/binary-tree-vertical-order-traversal/

Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
If two nodes are in the same row and column, the order should be from left to right.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

Example 2:
Input: root = [3,9,8,4,0,1,7]
Output: [[4],[9],[3,0,1],[8],[7]]

Example 3:
Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
Output: [[4],[9,5],[3,0,1],[8,2],[7]]
*/

// Using a queue and a map to keep track of the x axis (columns) and the node values
var verticalOrder = function(root) {
    if (!root) return [];
    let colMap = new Map(); // column: [..nodes in that column]
    let queue = [[root, 0]]
    let minX = Infinity;
    let maxX = -Infinity;

    while (queue.length) {
        let [currNode, currCol] = queue.shift();
        
        minX = Math.min(minX, currCol)
        maxX = Math.max(maxX, currCol)

        if (!colMap.has(currCol)) {
            colMap.set(currCol, [currNode.val]);
        } else {
            colMap.get(currCol).push(currNode.val);
        }

        if (currNode.left) {
            queue.push([currNode.left, currCol - 1]);
        }

        if (currNode.right) {
            queue.push([currNode.right, currCol + 1]);
        }
    }

    const result = [];
 
    for (let i = minX; i <= maxX; i++) {
        let mapVal = colMap.get(i);
        result.push(mapVal)
    }

    return result;
};