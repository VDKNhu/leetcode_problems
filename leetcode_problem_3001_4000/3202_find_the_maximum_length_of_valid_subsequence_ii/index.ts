function maximumLength(nums: number[], k: number): number {
    const dp = Array.from({length: k}, () => new Array(k).fill(0));
    let res = 0;

    for(const num of nums) {
        const x = num % k;

        for(let y = 0; y < k; y++) {
            dp[x][y] = dp[y][x] + 1;
            res = Math.max(dp[x][y], res);
        }
    }

    return res;
};