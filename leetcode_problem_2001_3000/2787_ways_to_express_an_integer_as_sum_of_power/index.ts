function numberOfWays(n: number, x: number): number {
    const MOD = Math.pow(10, 9) + 7;
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++) {
        const power = Math.pow(i, x);

        if(power > n) break;

        for(let j = n; j >= power; j--) {
            dp[j] = (dp[j] + dp[j - power]) % MOD;
        }
    }

    return dp[n];
};

