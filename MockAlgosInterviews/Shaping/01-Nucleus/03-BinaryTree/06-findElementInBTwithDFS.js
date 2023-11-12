/*
Given a binary tree and a target element's value, determine if the tree contains the target using depth first search (DFS).

Examples:
• Given a binary tree:
                 3
                / \
              29   4
              /     \
             2       2
                    /
                   9
• For target: 1 // returns False
• For target: 2 // returns True

Time <= 2 min

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

// Iterative Solution
// O(N) time
function DFSTree(node, target) {
    let stack = node ? [node] : [];
  
    while (stack.length > 0) {
      let cur = stack.pop(); // pop last element
      if (cur.value === target) {
        return true;
      }
      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
    }
  
    return false;
  }

// Recursive Solution
// O(n)
// O(N) time
function DFSTree(node, target) {
    if (!node) {
      return false;
    }
  
    if (node.value === target) {
      return true;
    }
  
    return DFSTree(node.left, target) || DFSTree(node.right, target);
  }

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(DFSTree(null, 1)) // false
console.log(DFSTree(tree1, 9)) // true
console.log(DFSTree(tree1, 1)) // false
console.log(DFSTree(tree1, 2)) // true
console.log(DFSTree(new TreeNode(1), 2)) // false