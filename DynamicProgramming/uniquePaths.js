/*
Leetcode 62 - Unique Paths
https://leetcode.com/problems/unique-paths/description/

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

var uniquePaths = function(m, n) { //return int
    const dp = [...Array(m+1)].map(_ => new Array(n+1).fill(0));
    
    for (let x = 0; x <= m; x++) {
        for (let y = 0; y <= n; y++) {
            if (x === 0 || y === 0) {
                continue;
            } else if (x === 1 || y === 1) {
                dp[x][y] = 1;
            } else {
                dp[x][y] = dp[x][y - 1] + dp[x-1][y]
            }
        }
    }
    return dp[m][n]
};
/*
     0   1     2   3    4    5    6    7
0 [  0 , 0  ,  0 , 0  , 0  , 0  , 0  , 0  ]
1 [  0 , 1  ,  1 , 1  , 1  , 1  , 1  , 1  ]
2 [  0 , 1  ,   ,   ,   ,   ,   ,   ]
3 [  0 , 1  ,   ,   ,   ,   ,   ,   ]

*/