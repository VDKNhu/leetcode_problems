class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days: number[], costs: number[]) {
        const dLen = days.length;
        const dp = new Array(dLen).fill(-1);

        const dfs = (i: number): number => {
            if(i === dLen) {
                return 0;
            }
            if(dp[i] !== -1) {
                return dp[i];
            }
            dp[i] = Infinity;
            let j = i;
            [1,7,30].forEach((d, idx) => {
                while(j < dLen && days[j] < days[i] + d) {
                    j++;
                }
                dp[i] = Math.min(dp[i], dfs(j) + costs[idx]);
            })
            return dp[i];
        }
        return dfs(0);
    }
}
