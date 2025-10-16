function findSmallestInteger(nums: number[], value: number): number {
    const freqs: number[] = new Array(value).fill(0);

    for(const num of nums) {
        const remainder = ((num % value) + value) % value;
        freqs[remainder]++;
    }

    for(let i = 0; ; i++) {
        const remainder = i % value;

        if(freqs[remainder] === 0) return i;
        freqs[remainder]--;
    }
};