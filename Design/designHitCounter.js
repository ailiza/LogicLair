/*
Leetcode 362 - Design Hit Counter
https://leetcode.com/problems/design-hit-counter/

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.
*/
class HitCounter {
  constructor() {
      this.log = [];
  }

  hit(timestamp) {
      this.log.push(timestamp)
  }

  getHits(timestamp, range = 300) {
      const startTime = timestamp - range;
      let count = 0;

      for (let i = this.log.length - 1; i >= 0; i--) {
          let el = this.log[i];
          if (el > startTime) {
              count++;
          } else break;
      }
      return count;
  }
}



//Alternative Solution
const HitCounter = function () {
  this.queue = [];
  this.sum = 0;
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  if (this.queue.length && this.queue[this.queue.length - 1][0] === timestamp) {
    this.queue[this.queue.length - 1][1]++;
  } else {
    this.queue.push([timestamp, 1]);
  }
  this.sum++;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  let difference = timestamp - 300;
  while (this.queue.length && this.queue[0][0] <= difference) {
    this.sum -= this.queue.shift()[1];

  }
  return this.sum;
};
