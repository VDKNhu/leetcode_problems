class Solution030201 {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number) {
        const cache = new Int32Array(n).fill(-1);
        const dfs = (i: number): number => {
            if(i >= n) return Number(i === n);
            if(cache[i] !== -1) return cache[i];
            return cache[i] = dfs(i + 1) + dfs(i + 2);
        }
        return dfs(0);
    }
}
