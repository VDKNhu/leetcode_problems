function smallestNumber(n: number): number {
    let count = 0;
    while(n > 1) {
        count++;
        n = Math.floor(n / 2);
    }

    return Math.pow(2, count + 1) - 1;
};