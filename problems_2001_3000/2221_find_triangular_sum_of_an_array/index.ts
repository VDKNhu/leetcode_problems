function triangularSum(nums: number[]): number {
    for(let i = nums.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            nums[j] = (nums[j] + nums[j + 1]) % 10;
        }
    }
    return nums[0];
};