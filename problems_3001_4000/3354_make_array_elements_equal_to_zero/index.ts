function countValidSelections(nums: number[]): number {
    const len = nums.length;
    const sum = nums.reduce((acc: number, num: number) => acc + num, 0);
    let res = 0, left = 0, right = sum;
    
    for(let i = 0; i < len; i++) {
        if(nums[i] === 0) {
            if(left - right >= 0 && left - right <= 1) res++;
            if(right - left >= 0 && right - left <= 1) res++;
        } else {
            left += nums[i];
            right -= nums[i];
        }
    }

    return res;
};

function countValidSelectionsV2(nums: number[]): number {
    function isValidStarter(nums: number[], start: number, step: number): boolean {
        if(nums.length === 1) return true;
        if(start < 0 || start >= nums.length) return nums.every((num: number) => num === 0);
    
        if(nums[start] === 0) return isValidStarter(nums, start + step, step);
    
        nums[start]--;
        return isValidStarter(nums, start - step, -step);
    }

    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            if(isValidStarter([...nums], i - 1, -1)) res++;
            if(isValidStarter([...nums], i + 1, 1)) res++;
        }
    }

    return res;
};
