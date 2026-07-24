class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let resIdx = 0, resLen = 0;
        const len = s.length;
        const dp = Array.from({ length: len }, () => new Array(len).fill(false));
        for(let i = len - 1; i >= 0; i--) {
            for(let j = i; j < len; j++) {
                if(s[i] === s[j] && (
                    j - i <= 2 ||
                    dp[i + 1][j - 1]
                )) {
                    dp[i][j] = true;
                    if(j - i + 1 > resLen) {
                        resIdx = i;
                        resLen = j - i + 1;
                    }
                }
            }
        }
        return s.slice(resIdx, resIdx + resLen);
    }
}
