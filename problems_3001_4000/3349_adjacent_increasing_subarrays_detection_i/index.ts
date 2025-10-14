function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    if (nums.length < 2 * k) return false;

    let index = 0;
    while (index <= nums.length - 2 * k) {
        let isValid = true;

        for (let i = 0; i < k - 1; i++) {
            if (nums[i + index] >= nums[i + index + 1] ||
                nums[i + k + index] >= nums[i + k + index + 1]) {
                    isValid = false;
                    break;
            }
        }

        if(isValid) return true;

        index++;
    }

    return false;
};