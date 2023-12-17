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

/*
Time complexity: O(N)
N is the number of nodes in the binary search tree. This is because the algorithm 
performs an inorder traversal of the entire tree, visiting each node once.

Space complexity: O(N)
In the worst case (unbalanced tree), it is O(N). Additionally, the algorithm 
uses space for the counts dictionary and the modes list, both of which have a space 
complexity of O(N) in the worst case if all unique values in the tree are different.
*/
var findMode = function(root) {
    const map = new Map(); //val: freq
    let maxCount = 0;
    let allTheModes = [];

    const traverse = function(node) {
        if (!node) return;
        
        traverse(node.left);

        let currFreq = (map.get(node.val) || 0) + 1
        map.set(node.val, currFreq)
        
        if (currFreq > maxCount) {
            maxCount = currFreq;
            allTheModes = [node.val]
        } else if (currFreq === maxCount) {
            allTheModes.push(node.val);
        }

        traverse(node.right);
    };

    traverse(root);

    return allTheModes;    
};