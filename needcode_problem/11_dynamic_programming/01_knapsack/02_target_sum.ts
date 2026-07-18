class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const NEG_INF = Number.MIN_SAFE_INTEGER;
        const totalSum = nums.reduce((acc: number, cur: number) => acc + cur, 0);
        const dp = Array.from({ length: nums.length }, () => new Array(2 * totalSum + 1).fill(NEG_INF));

        const backtrack = (i: number, total: number): number => {
            if(i === nums.length) {
                return total === target ? 1 : 0;
            }
            if(dp[i][total + totalSum] !== NEG_INF) {
                return dp[i][total + totalSum];
            }
            dp[i][total + totalSum] = 
                backtrack(i + 1, total + nums[i]) +
                backtrack(i + 1, total - nums[i]);
            return dp[i][total + totalSum];
        }
        
        return backtrack(0, 0);
    }
}
