function countPrimeSetBits(left: number, right: number): number {
    const primes = new Set<number>([2, 3, 5, 7, 11, 13, 17, 19]);
    let res = 0;

    for(let i = left; i <= right; i++) {
        let ones = 0;
        let value = i;
        while(value > 0) {
            ones += value % 2 === 1 ? 1 : 0;
            value = value >> 1;
        }

        if(primes.has(ones)) {
            res++;
        }
    }

    return res;
};