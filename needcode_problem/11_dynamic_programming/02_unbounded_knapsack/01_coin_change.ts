class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number) {
        let memo: Record<number, number> = {};
        const dfs = (amount: number) => {
            if(amount === 0) {
                return 0;
            }
            if(memo[amount] !== undefined) {
                return memo[amount];
            }
            let res = Infinity;
            for(const coin of coins) {
                if(amount - coin >= 0) {
                    res = Math.min(res, 1 + dfs(amount - coin));
                }
            }
            memo[amount] = res;
            return res;
        }

        const res = dfs(amount);
        return res === Infinity ? -1 : res;
    }
}
