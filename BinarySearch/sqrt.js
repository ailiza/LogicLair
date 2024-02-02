/*
Leetcode 69 - Sqrt(x)
https://leetcode.com/problems/sqrtx/description/
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

var mySqrt = function(x) {
    let lo = 0
    let hi = x + 1

    while (lo + 1 !== hi) {
        const mid = lo + ((hi - lo) >> 1)
        if (mid * mid <= x) lo = mid;
        else hi = mid
    }
    return lo
}

/*
find square root
x = 4
0 <= x < 2**31 -1

lo <= x < hi
because we're returning the sqrt of x rounded down to nearest integer
*/