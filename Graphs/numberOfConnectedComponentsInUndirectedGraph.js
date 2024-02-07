/*
Leetcode 323 - Number of Connected Components in an Undirected Graph
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.


Example 1:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
*/

/*
O(m α(N)) where m is a number of Find or Union 
operations and α is Inverse Ackermann Function. 
Inverse Ackermann Function is known for its extremely 
slow-growing property, therefore most of the time it 
is considered constant time in practical.

Time complexity: O(V+E⋅α(n))O(V + E\cdotα(n))O(V+E⋅α(n)).

Iterating over every edge requires O(E)O(E)O(E) operations, 
and for every operation, we are performing the combine 
method which is O(α(n))O(α(n))O(α(n)), where α(n) is the 
inverse Ackermann function. We also require O(V)O(V)O(V) 
time to initialize the DSU arrays.

Space complexity: O(V)O(V)O(V).

Storing the representative/immediate-parent of each 
vertex takes O(V)O(V)O(V) space. Furthermore, storing 
the size of components also takes O(V)O(V)O(V) space.
*/


//Time: O(v + e * ackerman(n)) | Space: O(v)
class UnionFind {
    constructor(n) {
        this.num = n;
        this.root = [...Array(n)].map((_, i) => i) //store parents
        this.rank = new Array(n).fill(1) //store rank/weight/heigh
    }

    find(x) {
        if (x === this.root[x]) return x; // because this is a parent
        return this.root[x] = this.find(this.root[x]) //collapse so future look ups is faster
    }

    union(x, y) {
        const parentX = this.find(x)
        const parentY = this.find(y)

        if (parentX !== parentY) {
            this.num--;

            //perform union by figuring out which rank/heigh is bigger
            if (this.rank[x] > this.rank[y]) {
                this.root[parentY] = parentX
                this.rank[x]++
            } else {
                this.root[parentX] = [parentY]
                this.rank[y]++
            }
        }
    }
}
var countComponents = function(n, edges) {
    const uf = new UnionFind(n)
    for (const [x, y] of edges) {
        uf.union(x, y)
    }

    return uf.num // number of components
};