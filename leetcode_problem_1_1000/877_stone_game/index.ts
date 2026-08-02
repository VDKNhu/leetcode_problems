function stoneGame(piles: number[]): boolean {
    const len = piles.length;
    const dp = Array.from({ length: len }, () => new Array(len).fill(0));

    const dfs = (i: number, j: number): number => {
        if(i >= j) {
            return 0;
        }
        if(dp[i][j] === 0) {
            const chooseLeft = piles[i] - dfs(i + 1, j);
            const chooseRight = piles[j] - dfs(i, j - 1);
            dp[i][j] = Math.max(chooseLeft, chooseRight);
        }
        return dp[i][j];
    }
    return dfs(0, len - 1) >= 0;
};