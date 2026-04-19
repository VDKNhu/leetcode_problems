function maxSum(nums: number[]): number {
    nums.sort((el1: number, el2: number) => el1 - el2);

    let res = nums[nums.length - 1];
    let prev = nums[nums.length - 1];

    for(let index = nums.length - 2; index >= 0; index--) {
        if(nums[index] === prev) continue;

        const nextRes = res + nums[index];

        if(nextRes <= res) return res;
        
        res = nextRes;
        prev = nums[index];
    }

    return res;
};