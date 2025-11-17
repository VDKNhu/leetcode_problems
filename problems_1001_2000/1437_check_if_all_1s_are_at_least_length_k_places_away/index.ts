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