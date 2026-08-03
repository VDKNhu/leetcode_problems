function stoneGameII(piles: number[]): number {
    const len = piles.length;
    const dp = Array.from({ length: len }, () => new Array(len + 1).fill(0));

    const prefixSums = new Array(len + 1).fill(0);
    for(let i = 0; i < len; i++) {
        prefixSums[i + 1] = prefixSums[i] + piles[i];
    }

    const dfs = (i: number, currentM: number): number => {
        if(currentM * 2 >= len - i) {
            return prefixSums[len] - prefixSums[i];
        }
        if(dp[i][currentM] !== 0) {
            return dp[i][currentM];
        }

        let maxStones = 0;
        for(let j = 1; j <= 2 * currentM; j++) {
            const totalRemaining = prefixSums[len] - prefixSums[i];
            const opponentStones = dfs(i + j, Math.max(currentM, j));
            maxStones = Math.max(maxStones, totalRemaining - opponentStones);
        }
        dp[i][currentM] = maxStones;
        return dp[i][currentM];
    }
    return dfs(0, 1);
};