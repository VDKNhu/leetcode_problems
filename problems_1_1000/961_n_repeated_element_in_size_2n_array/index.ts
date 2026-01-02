function repeatedNTimes(nums: number[]): number {
    for(let i = 1; i <= 3; i++) {
        for(let j = 0; j < nums.length - i; j++) {
            if(nums[j] === nums[j + i]) {
                return nums[j];
            }
        }
    }

    return -1;
};