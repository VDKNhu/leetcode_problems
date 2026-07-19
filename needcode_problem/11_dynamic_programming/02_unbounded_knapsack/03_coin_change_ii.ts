class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]) {
        coins.sort((a: number, b: number) => a - b);
        const len = coins.length;
        const dp = Array.from({ length: len + 1 }, () => new Array(amount + 1).fill(-1));
        const dfs = (i: number, amount: number): number => {
            if(amount === 0) {
                return 1;
            }
            if(i >= len) {
                return 0;
            }
            if(dp[i][amount] !== -1) {
                return dp[i][amount];
            }
            let res = 0;
            if(amount >= coins[i]) {
                res = dfs(i + 1, amount) + dfs(i, amount - coins[i]);
            }
            dp[i][amount] = res;
            return res;
        }
        return dfs(0, amount);
    }
}
