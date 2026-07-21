class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const len1 = s.length, len2 = t.length;
        const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
        if(len2 > len1) {
            return 0;
        }
        const dfs = (i: number, j: number): number => {
            if(j === len2) {
                return 1;
            }
            if(i === len1) {
                return 0;
            }
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            let res = dfs(i + 1, j);
            if(s[i] === t[j]) {
                res += dfs(i + 1, j + 1);
            }
            dp[i][j] = res;
            return res;
        }
        return dfs(0, 0);
    }
}
