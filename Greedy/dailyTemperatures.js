/**
Leetcode 739 - Daily Temperatures
https://leetcode.com/problems/daily-temperatures/description/

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
 */

// Linear Solution Using a Stack to keep track of indices

var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0); //0 because there's no days to wait for the next day to see an increasing temp
  const stack = []; //keeps track of all the indices and you only do something when you find a temp that's higher than last

  for (let curr = 0; curr < n; curr++) {
      let last = stack[stack.length - 1]

      while (stack.length && temperatures[last] < temperatures[curr]) {
          let lastIdx = stack.pop();
          let distance = curr - lastIdx;
          
          result[lastIdx] = distance;
          last = stack[stack.length - 1]
      }

      stack.push(curr);
  }

  return result;
};

// Brute Force
// Time: O(n^2) | Space: O(1)
const dailyTemperatures = function(T) {
  const resultArr = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
      let currentTemp = T[i];
      let count = 0;
      let j = i;
      while (j < T.length) {
          if (currentTemp < T[j]) break;
          count++;
          j++;
      }
      if (currentTemp < T[j]) resultArr[i] = count;
  }
  return resultArr;
};

// Linear Solution Using a Stack
// Video Explanation: https://www.youtube.com/watch?v=WGm4Kj3lhRI
// Time: O(n) | Space: O(n)
const dailyTemperaturesLinear = function(T) {
  const resultArr = new Array(T.length);
  const stack = [];
  let currentIdx = T.length - 1;
  while (currentIdx >= 0) {
      let currentTemp = T[currentIdx];
      while (stack.length && currentTemp >= stack[stack.length - 1][1]) {
          stack.pop();
      }
      if (!stack.length) resultArr[currentIdx] = 0;
      else resultArr[currentIdx] = stack[stack.length - 1][0] - currentIdx;
      stack.push([currentIdx, currentTemp]);
      currentIdx--;
  }
  return resultArr;
};
