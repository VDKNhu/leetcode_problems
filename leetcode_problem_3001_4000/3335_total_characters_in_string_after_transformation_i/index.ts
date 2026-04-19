function lengthAfterTransformations(s: string, t: number): number {
    const MOD = Math.pow(10, 9) + 7;
    let count = new Array(26).fill(0);

    for(const char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    while(t-- > 0) {
        const countTmp = new Array(26).fill(0);

        for(let i = 0; i < 25; i++) {
            countTmp[i + 1] = count[i];
        }

        countTmp[0] = count[25];
        countTmp[1] = (count[0] + count[25]) % MOD;
        count = countTmp;
    }

    const len = count.reduce((acc: number, cur: number) => acc + cur);
    return len % MOD;
};