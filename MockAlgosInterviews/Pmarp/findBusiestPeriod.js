/*
Pramp - Busiest Time In the Mall

Busiest Time in The Mall
The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year. You’re given data extracted from the mall’s door detectors. Each data point is represented as an integer array whose size is 3. The values at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the visitors entered or exited the mall (0 for exit and 1 for entrance), respectively. Here’s an example of a data point: [ 1440084737, 4, 0 ].

Note that time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Given an array, data, of data points, write a function findBusiestPeriod that returns the time at which the mall reached its busiest moment last year. The return value is the timestamp, e.g. 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.

Assume that the array data is sorted in an ascending order by the timestamp. Explain your solution and analyze its time and space complexities.

Example:

input:  data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

output: 1487800378 # since the increase in the number of people
                   # in the mall is the highest at that point
Constraints:

[time limit] 5000ms

[input] array.array.integer data

1 ≤ data.length ≤ 100
[output] integer
*/

function findBusiestPeriod(data) {
    if (data.length === 1) return data[0][0];
  
    const IN = 1;
    const OUT = 0;
    let tempCount = 0;
    let maxCount = -Infinity;
    let maxTime = 0;
    
    for (let i = 0; i < data.length; i++) {
      const [time1, num1, dir1] = data[i];
  
      if (dir1 === IN) {
        tempCount += num1;
      } else if (dir1 === OUT) {
        tempCount -= num1;
      }
      
      if (i < data.length - 1 && time1 === data[i + 1][0]) { //only update maxCount after you've counted up all the people in the same time block
        continue;
      }
      
      if (tempCount > maxCount) {
        maxCount = tempCount;
        maxTime = time1;
      }
    }
    
    return maxTime;
  }