class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const len1 = word1.length, len2 = word2.length;
        const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
        const dfs = (i: number, j: number): number => {
            if(i === len1) {
                return len2 - j;
            }
            if(j === len2) {
                return len1 - i;
            }
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            if(word1[i] === word2[j]) {
                dp[i][j] = dfs(i + 1, j + 1);
            } else {
                dp[i][j] = Math.min(...[dfs(i + 1, j), dfs(i, j + 1), dfs(i + 1, j + 1)]) + 1;
            }
            return dp[i][j];
        }
        return dfs(0, 0);
    }
}
