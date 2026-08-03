function stoneGameIII(stoneValue: number[]): string {
    const len = stoneValue.length;
    const dp = new Array(len).fill(Infinity);
    const dfs = (i: number): number => {
        if(i >= len) {
            return 0;
        }
        if(dp[i] !== Infinity) {
            return dp[i];
        }

        let sum = 0;
        let maxDiff = -Infinity;
        for(let j = 0; j < 3 && j + i < len; j++) {
            sum += stoneValue[i + j];
            maxDiff = Math.max(maxDiff, sum - dfs(i + j + 1));
        }
        dp[i] = maxDiff;
        return dp[i];
    }

    const diff = dfs(0);
    if(diff === 0) {
        return "Tie";
    }
    return diff > 0 ? "Alice" : "Bob";
};