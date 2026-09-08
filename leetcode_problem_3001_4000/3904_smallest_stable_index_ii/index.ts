function firstStableIndex(nums: number[], k: number): number {
    const len = nums.length;
    let max = -Infinity;
    let res = 0, currentMax = 0;

    for(let i = 0; i < len; i++) {
        max = Math.max(max, nums[i]);
        if(i === res) {
            currentMax = max;
        }
        if(k < currentMax - nums[i]) {
            res = i + 1;
        }
    } 

    return res < len ? res : -1;
};