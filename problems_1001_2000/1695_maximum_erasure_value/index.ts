function maximumUniqueSubarray(nums: number[]): number {
    let res = 0;
    let curAcc = 0;
    let left = 0;
    let numMap: Map<number, number> = new Map();

    for(let right = 0; right < nums.length; right++) {
        if(numMap.has(nums[right])) {
            let index = numMap.get(nums[right]) as number;
            while(left <= index) {
                curAcc -= nums[left];
                left++;
            }
        }

        numMap.set(nums[right], right);
        curAcc += nums[right];
        res = curAcc > res ? curAcc : res;
    }

    return res;
};