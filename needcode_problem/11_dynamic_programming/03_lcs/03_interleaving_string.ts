class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const len1 = s1.length, len2 = s2.length, len3 = s3.length;
        if(len1 + len2 !== len3) {
            return false;
        }
        const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
        const dfs = (i: number, j: number, k: number): boolean => {
            if(k === len3) {
                return i === len1 && j === len2;
            }
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            let res = false;
            if(i < len1 && s1[i] === s3[k]) {
                res = dfs(i + 1, j, k + 1);
            }
            if(!res && j < len2 && s2[j] === s3[k]) {
                res = dfs(i, j + 1, k + 1);
            }
            dp[i][j] = res;
            return res;
        }
        return dfs(0, 0, 0);
    }
}
