class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones: number[]) {
        const stoneSum = stones.reduce((acc: number, cur: number) => acc + cur, 0);
        const target = Math.ceil(stoneSum / 2);
        const dp = Array.from({ length: stones.length }, () => new Array(target + 1).fill(-1));

        const dfs = (i: number, total: number) => {
            if(i === stones.length || total >= target) {
                return Math.abs(total - (stoneSum - total));
            }
            if(dp[i][total] !== -1) {
                return dp[i][total];
            }
            dp[i][total] = Math.min(
                dfs(i + 1, total),
                dfs(i + 1, total + stones[i])
            )
            return dp[i][total];
        }

        return dfs(0, 0);
    }
}
