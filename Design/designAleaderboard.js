/*
Leetcode 1244 - Design A Leaderboard
https://leetcode.com/problems/design-a-leaderboard/description/

Design a Leaderboard class, which has 3 functions:

addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
top(K): Return the score sum of the top K players.
reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.

 

Example 1:

Input: 
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
Output: 
[null,null,null,null,null,null,73,null,null,null,141]

Explanation: 
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;
*/

class Player {
    id;
    score;
    
    constructor(id,score){
        this.id = id;
        this.score = score;
    }
}

var Leaderboard = function() {
    this.players = new Map();
};

Leaderboard.prototype.addScore = function(playerId, score) {
    const newScore = this.players.has(playerId) ? this.players.get(playerId).score + score : score;
    const newPlayer = new Player(playerId,newScore);
    
    this.players.set(playerId,newPlayer);
};

Leaderboard.prototype.top = function(K) {
    let sum = 0;
    const topK = new MinPriorityQueue({ priority: (e) => e });
    
    for(let [id, player] of this.players){
        if(topK.size() < K){
            topK.enqueue(player.score);
            sum += player.score;
            continue;
        }
        
        const minScoreInQueue = topK.front().element;
        
        if(player.score > minScoreInQueue){
            topK.dequeue();
            topK.enqueue(player.score);
            sum += player.score - minScoreInQueue;
        }
    }
    
    return sum;
};

Leaderboard.prototype.reset = function(playerId) {
    this.players.delete(playerId);
};