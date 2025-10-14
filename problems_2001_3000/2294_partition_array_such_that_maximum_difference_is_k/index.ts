function partitionArray(nums: number[], k: number): number {
    nums.sort((num1: number, num2: number) => num1 - num2);
    let prevValue = nums[0], res = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - prevValue <= k) continue;
        
        prevValue = nums[i];
        res++;
    }

    return res;
};