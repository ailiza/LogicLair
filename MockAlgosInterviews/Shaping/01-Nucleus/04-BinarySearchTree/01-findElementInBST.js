/*
Given a binary search tree and a target integer, check if the tree contains a target.

Examples:
• Given a binary search tree:
                  8
                /   \
               3     10
              / \      \
             1   6      14
                       /
                     13
• For target: 4 // returns False
• For target: 14 // returns True

Time <= 1 min

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

// Recursive Solution
function searchBST(root, target) {
    if (!root) return false;
    if (root.value === target) return true;
  
    if (target > root.value) {
      return searchBST(root.right, target);
    } else {
      return searchBST(root.left, target);
    }
  }

// Shaping Solution
function searchBST(root, target) {
    let curr = root
    while (curr) {
      if (curr.value === target) {
        return true
      } else if (curr.value < target) {
        curr = curr.right
      } else {
        curr = curr.left
      }
    }
    return false
  }


// Test Cases
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(searchBST(null, 1)) // false
console.log(searchBST(tree, 1)) // true
console.log(searchBST(tree, 14)) // true
console.log(searchBST(tree, 2)) // false
console.log(searchBST(tree, 13)) // true
console.log(searchBST(new TreeNode(), 0)) // true

// Given tree:
//                   8
//                 /   \
//                3     10
//               / \      \
//              1   6      14
//                        /
//                      13