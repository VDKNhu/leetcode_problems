const kMod = 1000000007;

function countGoodNumbers(n: number): number {
    return Number((myPow(BigInt(5), (BigInt(n) + 1n) / 2n) * myPow(BigInt(4), BigInt(n) / 2n)) % BigInt(kMod))
};

function myPow(x: bigint, n: bigint): bigint {
    let res: bigint = 1n;

    while (n > 0n) {
        if (n & 1n) {
            res = (res * x) % BigInt(kMod);
        }

        x = (x * x) % BigInt(kMod);
        n >>= 1n;
    }

    return res;
}