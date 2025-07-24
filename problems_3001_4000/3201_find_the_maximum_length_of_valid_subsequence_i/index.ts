function maximumLength(nums: number[]): number {
    let res = 0;
    const dp = Array.from({length: 2}, () => new Array(2).fill(0));

    for(const num of nums) {
        const x = num % 2;

        for(let index = 0; index < 2; index++) {
            const y = (x - index + 2) % 2;

            dp[x][y] = dp[y][x] + 1;
            res = Math.max(res, dp[x][y]);
        }
    }

    return res;
};

function maximumLengthV2(nums: number[]): number {
    const n = nums.length;
    let odd = nums[0] % 2;
    let switches = 1;

    for (let i = 1; i < n; i++) {
        const mod = nums[i] % 2;
        odd += mod;
        switches += (nums[i - 1] + nums[i]) % 2;
    }

    return Math.max(odd, n - odd, switches)
};