function findFinalValue(nums: number[], original: number): number {
    let res = original;
    while(nums.includes(res)) {
        res *= 2;
    }

    return res;
};