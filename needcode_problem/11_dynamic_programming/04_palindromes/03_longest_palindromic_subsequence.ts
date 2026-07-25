class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s: string): number {
        const len = s.length;
        const dp = Array.from({ length: len }, () => new Array(len).fill(-1));
        const dfs = (i: number, j: number): number => {
            if(i > j) {
                return 0;
            }
            if(i === j) {
                return 1;
            }
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            if(s[i] === s[j]) {
                dp[i][j] = dfs(i + 1, j - 1) + 2;
            } else {
                dp[i][j] = Math.max(dfs(i + 1, j), dfs(i, j - 1));
            }
            return dp[i][j];
        }
        return dfs(0, len - 1);
    }
}
