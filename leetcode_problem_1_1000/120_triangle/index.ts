function minimumTotal(triangle: number[][]): number {
    const rows = triangle.length;
    const dp = new Array(rows + 1).fill(0);

    for(let row = rows - 1; row >= 0; row--) {
        for(let col = 0; col <= row; col++) {
            dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
        }
    }

    return dp[0];
}