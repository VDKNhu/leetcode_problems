function prefixesDivBy5(nums: number[]): boolean[] {
    let curValue = 0;
    const len = nums.length;
    const res: boolean[] = new Array(len).fill(false);
    for(let i = 0; i < len; i++) {
        curValue = (curValue << 1 | nums[i]) % 5;
        res[i] = curValue === 0;
    }

    return res;
};