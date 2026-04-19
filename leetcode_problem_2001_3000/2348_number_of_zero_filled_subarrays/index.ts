function zeroFilledSubarray(nums: number[]): number {
    let index = 0;
    let count = 0;
    let res = 0;

    while(index < nums.length) {
        if(nums[index] === 0) {
            count++;
            res += count;
        } else {
            count = 0;
        }
        index++;
    }

    return res;
};