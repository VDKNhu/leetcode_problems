function kLengthApart(nums: number[], k: number): boolean {
    const startIndex = nums.findIndex((num: number) => num === 1);
    let distance = 0;

    for(let i = startIndex + 1; i < nums.length; i++) {
        if(nums[i]) {
            if(distance < k) return false;
            distance = 0;
        } else {
            distance++;
        }
    }

    return true;
};

function kLengthApartV2(nums: number[], k: number): boolean {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let prevIndex = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1 && prevIndex !== -1) {
            minDistance = Math.min(minDistance, i - prevIndex - 1);
        } 
        if(nums[i] === 1) prevIndex = i;
    }

    return minDistance >= k;
};