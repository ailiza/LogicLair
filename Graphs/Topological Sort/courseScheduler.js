/*
Leetcode 207
https://leetcode.com/problems/course-schedule/description/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


*/


// Topological Sort is good for non cyclic graphs where order of the path matters
// for this example, you have to take a bunch of prereqs in order before taking Math 400 level classes
// Time:O(m+n) m for edges and n elements for the indegree array 
// Space: O(m+n) m for indegree array and n for queue

var canFinish = function(numCourses, prerequisites) {
    const graph = new Map(); //prereq: [course1,course2]
    const indegree = new Array(numCourses).fill(0); //indegree for course you need to take
    
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, [course])
        } else {
            graph.get(prereq).push(course);
        }
        indegree[course]++;
    }
    
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const result = []; //this is the order you take the classes in
    
    while (queue.length) {
        let currCourse = queue.shift();
        
        if (graph.has(currCourse)) {
            for (let nei of graph.get(currCourse)) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }
        result.push(currCourse);
    }
    
    return result.length === numCourses;
};


// DFS approach
var canFinish = function(numCourses, prerequisites) {
    const preMap = {};
    const visited = {};

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, prereq] = prerequisites[i];
        if (!preMap[course]) preMap[course] = [];
        preMap[course].push(prereq);
    }

    function dfs(node) {
        if (visited[node]) return false;

        if (preMap[node]) {
            if (preMap[node].length === 0) return true;

            visited[node] = true;

            for (const prereq of preMap[node]) {
                if (!dfs(prereq)) return false;
            }

            visited[node] = false;
            preMap[node] = [];
        }
        return true;
    }

    for (const course in preMap) {
        if (!dfs(course)) return false;
    }

    return true;
};