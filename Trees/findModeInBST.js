/*
Leetcode 501 - Find Mode in Binary Search Tree

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [1,null,2,2]
Output: [2]
Example 2:

Input: root = [0]
Output: [0]
*/

var findMode = function(root) {
    const map = new Map(); //val : freq
    let maxCount = 0;
    let result = []; //all the modes

    const traverse = function(node) {
        if (node === null) return;

        traverse(node.left);

        const mapFreq = (map.get(node.val) || 0) + 1;
        map.set(node.val, mapFreq);

        if (mapFreq > maxCount) {
            maxCount = mapFreq;
            result = [node.val];
        } else if (mapFreq === maxCount) {
            result.push(node.val);
        }

        traverse(node.right);
    }
    traverse(root);
    return result;
};