function maxIncreasingSubarrays(nums: number[]): number {
    const len = nums.length;
    if(len < 4) return 1;
    
    let index = 0, prevCount = 0, curCount = 0, res = 0, maxIncreasingCount = 0, isAllIncreasing = true, isAllDecreasing = true;
    while(index < len) {
        while(index + 1 < len && nums[index] < nums[index + 1]) {
            curCount++;
            index++;
        }

        curCount++;
        maxIncreasingCount = Math.max(maxIncreasingCount, curCount);
        if(isAllIncreasing && curCount !== len) isAllIncreasing = false; 
        if(isAllDecreasing && curCount !== len) isAllDecreasing = false; 
        res = prevCount > 0 ? Math.max(res, Math.min(prevCount, curCount)) : res;
        prevCount = curCount;
        curCount = 0;
        index++;
    }

    if(isAllIncreasing) return Math.floor(len / 2);
    if(isAllDecreasing) return 1;
    return Math.max(res, Math.floor(maxIncreasingCount / 2));
};