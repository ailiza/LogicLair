/*
Given a binary tree, find the height of the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 2

Time <= 2 min
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findTreeHeight(root) {   
    if (!root) {
      return -1
    } //because no root returns -1
  
    return 1 + Math.max(findTreeHeight(root.left), findTreeHeight(root.right))
  }

// Test Cases
console.log(findTreeHeight(null)) //-1
console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) //1
console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) //3