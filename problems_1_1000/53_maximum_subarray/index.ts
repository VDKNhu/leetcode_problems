function maxSubArray(nums: number[]): number {
    let curSum = 0, maxSum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i];

        if(curSum > maxSum) {
            maxSum = curSum;
        }

        if(curSum < 0) {
            curSum = 0;
        }
    }
    
    return maxSum;
};