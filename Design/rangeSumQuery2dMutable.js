/*
Leetcode 308 - Range Sum Query 2D - Mutable
https://leetcode.com/problems/range-sum-query-2d-mutable/description/
Given a 2D matrix matrix, handle multiple queries of the following types:

Update the value of a cell in matrix.
Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
void update(int row, int col, int val) Updates the value of matrix[row][col] to be val.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*/

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    update(row, col, val) {
        this.matrix[row][col] = val;
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j]
            }
        }
        return sum;
    }
}