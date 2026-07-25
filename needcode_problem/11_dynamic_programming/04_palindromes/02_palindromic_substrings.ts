class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const len = s.length;
        let res = 0;
        const dp = Array.from({ length: len }, () => new Array(len).fill(false));
        for(let i = len - 1; i >= 0; i--) {
            for(let j = i; j < len; j++) {
                if(s[i] === s[j] && (
                    j - i <= 2 ||
                    dp[i + 1][j - 1]
                )) {
                    dp[i][j] = true;
                    res++;
                }
            }
        }
        return res;
    }
}
