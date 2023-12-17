/*
Leetcode 236 - Lowest Common Ancestor of a Binary Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [1,2], p = 1, q = 2
Output: 1
*/

var lowestCommonAncestor = function(root, p, q) {
    function explore(node) {
        if (!node) return;
        if (node === p || node === q) return node;

        let left = explore(node.left); //look for p or q in left subtree
        let right = explore(node.right); //look for p or q in right subtree

        if (left && right) {//if left and right are found, return the
            return node; //current node or stack level that you're on
        } else {
            return left || right; //default val is undefined
        }
    }

    return explore(root);
};