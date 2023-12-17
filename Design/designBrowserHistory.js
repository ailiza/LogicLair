 
/*
Leetcode 1472 - Design Browser History
URL: https://leetcode.com/problems/design-browser-history/

You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
 

Example:

Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
/*
const BrowserHistory = function(homepage) {
  this.stack = [homepage];
  this.currentPage = homepage;
  this.currentPos = 0;
};



/**
 * Time: O(1) | Space: O(1)
* @param {string} url
* @return {void}
*/

class BrowserHistory {
  constructor(homepage) {
      this.history = [homepage];
      this.curr = 0;
      this.last = 0;
  }

  visit(url) {
      this.curr++;

      if (this.curr === this.history.length) {
          this.history.push(url);
      } else {
          this.history[this.curr] = url;
      }

      this.last = this.curr;
  }

  back(steps) {
      this.curr = Math.max(0, this.curr - steps);
      return this.history[this.curr];
  }

  forward(steps) {
      this.curr = Math.min(this.last, this.curr + steps)
      return this.history[this.curr];
  }
}





//Alternative Solution
BrowserHistory.prototype.visit = function(url) {
  if (this.currentPos !== this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.currentPos + 1);
  }
  this.stack.push(url);
  this.currentPos = this.stack.length - 1;
  this.currentPage = url;
};

/**
 * Time: O(1) | Space: O(1)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  let newPosition = this.currentPos - steps;
  if (newPosition < 0) newPosition = 0;
  this.currentPos = newPosition;
  this.currentPage = this.stack[this.currentPos];
  return this.currentPage;
};

/**
 * Time: O(1) | Space: O(1)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  let newPosition = this.currentPos + steps;
  if (newPosition >= this.stack.length) newPosition = this.stack.length - 1;
  this.currentPos = newPosition;
  this.currentPage = this.stack[this.currentPos];
  return this.currentPage;
};

/**
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/
