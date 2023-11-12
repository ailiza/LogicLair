/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Examples:
• Given a binary tree:
        2
       / \
      1   3
// returns True

• Given a binary tree:
        1
       / \
      2   3
// returns False

Time <= 4 min
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

// Recursive Solution
// O(n)
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
  }

// Shaping Solution
// O(N) time
function validateBST(node) {
    function helper(node, min, max) {
      if (!node) {
        return true;
      } else if (node.value <= min || node.value > max) {
        return false;
      }
  
      return (
        helper(node.left, min, node.value) &&
        helper(node.right, node.value, max)
      );
    }

    return helper(node, -Infinity, Infinity)
}

// Test Cases
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
const tree4 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(9)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(isValidBST(null)) // true
console.log(isValidBST(tree1)) // true
console.log(isValidBST(tree2)) // false
console.log(isValidBST(tree3)) // true
console.log(isValidBST(tree4)) // false
console.log(isValidBST(new TreeNode())) // true