function firstStableIndex(nums: number[], k: number): number {
    const len = nums.length;
    const leftMax: number[] = new Array(len).fill(-1);
    const rightMin: number[] = new Array(len).fill(-1);

    let currentMax = nums[0];
    for(let i = 0; i < len; i++) {
        currentMax = Math.max(currentMax, nums[i]);
        leftMax[i] = currentMax;
    }

    let currentMin = nums[len - 1];
    for(let i = len - 1; i >= 0; i--) {
        currentMin = Math.min(currentMin, nums[i]);
        rightMin[i] = currentMin;
    }

    for(let i = 0; i < len; i++) {
        if(leftMax[i] - rightMin[i] <= k) {
            return i;
        }
    }
    return -1;
};