function countCommas(n: number): number {
    let res = 0, threshold = 1000;

    while(n >= threshold) {
        res += n - threshold + 1;
        threshold *= 1000;
    }

    return res;
};