/*
Leetcode 310 - Minimum Height Trees
https://leetcode.com/problems/minimum-height-trees/description/

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.


Example 1:
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

Example 2:
Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
*/

// Time: O(V) | Space: O(V) 
// Use BFS to trim the tree starting from leaf nodes. You'll know it's a leaf because the indegree === 1
// Use tempArr to store all the leaf nodes you've processed and have result = [...tempArr]
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]
    const graph = new Map(); //node: [...nodes it's connected to]
    const indegree = new Array(n).fill(0);

    edges.forEach(([node1, node2]) => {
        if (!graph.has(node1)) {
            graph.set(node1, [])
        }
        if (!graph.has(node2)) {
            graph.set(node2, [])
        }
        graph.get(node1).push(node2)
        graph.get(node2).push(node1)
        indegree[node1]++;
        indegree[node2]++;
    })
    
    //queue holds the leaf nodes
    let queue = []
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 1) {
            queue.push(i)
        }
    }
    
    //result will hold the final array of centroids because we're pruning the tree
    let result = [];
    while (queue.length) {
        let size = queue.length;
        let tempArr = [];

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            tempArr.push(curr)

            if (graph.has(curr)) {
                for (let nei of graph.get(curr)) {
                    indegree[nei]--;
                    if (indegree[nei] === 1) {
                        queue.push(nei)
                    }
                }
            }
        }
        result = [...tempArr];
    }
    return result;
};