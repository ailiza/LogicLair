/*
Leetcode 274 -  H-Index

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.


Example 1:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:
Input: citations = [1,3,1]
Output: 1
*/

//Sort and take advantage of it
function hIndex(citations) {
    let cCopy = citations.sort((a,b) => b - a);
    for (let i = 0; i < cCopy.length; i++) {
        if (cCopy[i] < i + 1) {
            return i;
        }
    }

    return citations.length;
}

// Brute force
var hIndex = function(citations) {
    let hIdx = 0;
    for (let h = 1; h <= citations.length; h++) {
        let numPapers = 0;
        for (let j = 0; j < citations.length; j++) {
            let currPaper = citations[j];
            if (currPaper >= h) {
                numPapers++;
            } 
        }
        if (numPapers >= h) {
            hIdx = h;
        } 
    }

    return hIdx;

}