function winnerSquareGame(n: number): boolean {
    const dp = new Array(n + 1).fill(0);

    const dfs = (remainingStones: number): boolean => {
        if(remainingStones <= 0) {
            return false;
        }
        if(dp[remainingStones] !== 0) {
            return dp[remainingStones] === 1;
        }
        for(let i = 1; i * i <= remainingStones; i++) {
            if(!dfs(remainingStones - i * i)) {
                dp[remainingStones] = 1;
                return true;
            }
        }
        dp[remainingStones] = -1;
        return false;
    } 
    return dfs(n);
};