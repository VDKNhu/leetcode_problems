function countSquares(matrix: number[][]): number {
    let res = 0;
    const row = matrix.length;
    const column = matrix[0].length;
    const dp: number[][] = Array.from({length: row}, () => new Array(column).fill(0));

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = matrix[i][j];
            } else if(matrix[i][j] === 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            
            res += dp[i][j];
        }
    }

    return res;
};