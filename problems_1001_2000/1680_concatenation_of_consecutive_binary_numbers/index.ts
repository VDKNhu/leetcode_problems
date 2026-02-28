function concatenatedBinary(n: number): number {
    const MOD = BigInt(10 ** 9 + 7);
    let res = 0n, bitsShift = 0n;
    for(let i = 1n; i <= n; i++) {
        // Check if current number is a power of 2
        if((i & (i - 1n)) === 0n) {
            bitsShift++;
        }
        res = ((res << bitsShift) | i) % MOD;
    }
    return Number(res);
};