/*
Leetcode 261
https://leetcode.com/problems/graph-valid-tree/description/

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
*/


class UnionFind {
    constructor(n) {
        this.num = n;
        this.root = [...Array(n)].map((_,i) => i)
    }

    find(x) {
        if (x === this.root[x]) return x
        return this.root[x] = this.find(this.root[x])
    }

    union(x, y) {
        const parentX = this.find(x)
        const parentY = this.find(y)

        if (parentX === parentY) return false // a true tree starts at one node so if two nodes
        //have the same parent then you've detected a cycle and not a tree

        this.root[parentY] = parentX
        this.num--
        return true
    }

}

var validTree = function(n, edges) {
    const uf = new UnionFind(n)
    for (const [x, y] of edges) {
        if (uf.union(x, y) === false) return false
    }
    return uf.num === 1
};