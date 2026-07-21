class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1: string, str2: string) {
        const len1 = str1.length, len2 = str2.length;
        const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
        const dfs = (i: number, j: number): string[] => {
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            if(i === len1) {
                const arr = str2.slice(j).split("");
                arr.reverse(); 
                dp[i][j] = arr;
                return arr;
            }
            if(j === len2) {
                const arr = str1.slice(i).split("");
                arr.reverse();
                dp[i][j] = arr;
                return arr;
            }
            let res;
            if(str1[i] === str2[j]) {
                res = [...dfs(i + 1, j + 1)];
                res.push(str1[i]);
            } else {
                const s1 = dfs(i + 1, j);
                const s2 = dfs(i, j + 1);
                if(s1.length < s2.length) {
                    res = [...s1];
                    res.push(str1[i]);
                } else {
                    res = [...s2];
                    res.push(str2[j]);
                }
            }
            dp[i][j] = res;
            return res;
        }
        return dfs(0, 0).reverse().join("");
    }

    // Building the actual string during recursion can be expensive due to string concatenation overhead. 
    // A more efficient approach is to first compute only the lengths using DP, 
    // then reconstruct the string by tracing back through the DP table.
    shortestCommonSupersequenceByTracing(str1: string, str2: string): string {
        const len1 = str1.length, len2 = str2.length;
        const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
        const dfs = (i: number, j: number): number => {
            if(dp[i][j] !== -1) {
                return dp[i][j];
            }
            if(i === len1) {
                return dp[i][j] = len2 - j;
            }
            if(j === len2) {
                return dp[i][j] = len1 - i;
            }
            if(str1[i] === str2[j]) {
                dp[i][j] = 1 + dfs(i + 1, j + 1);
            } else {
                dp[i][j] = 1 + Math.min(dfs(i + 1, j), dfs(i, j + 1));
            }
            return dp[i][j];
        }
        dfs(0, 0);
        const buildSCS = () => {
            const res = [];
            let i = 0, j = 0;
            while(i < len1 || j < len2) {
                if(i === len1) {
                    res.push(...str2.slice(j));
                    break;
                }
                if(j === len2) {
                    res.push(...str1.slice(i));
                    break;
                }
                if(str1[i] === str2[j]) {
                    res.push(str1[i]);
                    i++;
                    j++;
                } else if(dp[i + 1][j] < dp[i][j + 1]) {
                    res.push(str1[i]);
                    i++;
                } else {
                    res.push(str2[j]);
                    j++;
                }
            }
            return res.join("");
        }
        return buildSCS();
    }
}
