function isTrionic(nums: number[]): boolean {
    let i = 0;
    while(i < nums.length - 2 && nums[i] < nums[i + 1]) {
        i++;
    }

    if(i === 0) {
        return false;
    }

    let peakIndex = i;
    while(peakIndex < nums.length - 1 && nums[peakIndex] > nums[peakIndex + 1]) {
        peakIndex++;
    }

    if(peakIndex === i || peakIndex === nums.length - 1) {
        return false;
    }

    while(peakIndex < nums.length - 1 && nums[peakIndex] < nums[peakIndex + 1]) {
        peakIndex++;
    }

    return peakIndex === nums.length - 1;
};