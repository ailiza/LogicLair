/*
Given a binary tree, find the element with the largest value.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 7

Time <= 2 min
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

// Iterative
function findTreeMax(root) {
    if (!root) {
      return null
    }
    let max = root.value
    let queue = [root]
    while (queue.length > 0) {
      let curr = queue.shift()
      max = Math.max(max, curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
    return max
  }


//Recursive
function findTreeMax(root) {
    if (!root) return null;
  
    return Math.max(
      root.value,
      findTreeMax(root.left) || -Infinity,
      findTreeMax(root.right) || -Infinity
    );
  }

// Test Cases
console.log(findTreeMax(null)) // null
console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findTreeMax(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findTreeMax(new TreeNode(1))) // 1