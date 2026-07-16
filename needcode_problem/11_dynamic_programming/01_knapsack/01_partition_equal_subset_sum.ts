class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const sum = nums.reduce((acc: number, cur: number) => acc + cur, 0);
        if(sum % 2 !== 0) {
            return false;
        }
        const len = nums.length;
        const target = sum / 2;
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;
        for(let i = 0; i < len; i++) {
            for(let j = target; j >= nums[i]; j--) {
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
        return dp[target];
    }
}
