/*
Leetcode 1136 - Parallel Courses
https://leetcode.com/problems/parallel-courses/description/

You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei.

In one semester, you can take any number of courses as long as you have taken all the prerequisites in the previous semester for the courses you are taking.

Return the minimum number of semesters needed to take all courses. If there is no way to take all the courses, return -1.

 

Example 1:
Input: n = 3, relations = [[1,3],[2,3]]
Output: 2
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 1 and 2.
In the second semester, you can take course 3.

Example 2:
Input: n = 3, relations = [[1,2],[2,3],[3,1]]
Output: -1
Explanation: No course can be studied because they are prerequisites of each other.
*/

// Topological Sort with BFS level by level where the level is not an array but a count
// Time: O(N + E) | Space: O(N + E) where N is the number of courses and E is the length of relations
var minimumSemesters = function (n, relations) {
    const graph = new Map();
    const indegree = new Array(n+1).fill(0);

    relations.forEach(([node1, node2]) => {
        if (!graph.has(node1)) graph.set(node1, [])
        graph.get(node1).push(node2)
        indegree[node2]++;
    })

    let level = 0; //number of semesters
    let queue = [];
    let classesTaken = [];

    for (let i = 1; i <= indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            classesTaken.push(curr)

            if (graph.has(curr)) {
                for (let nei of graph.get(curr)) {
                    indegree[nei]--;
                    if (indegree[nei] === 0) {
                        queue.push(nei);
                    }
                }
            }
        }
        level++;

    }

    return classesTaken.length === n ? level : -1;
};