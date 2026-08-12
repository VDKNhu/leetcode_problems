function maxSubarrayLength(nums: number[], k: number): number {
    const freq: Map<number, number> = new Map<number, number>();
    let res = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        const value = nums[right];
        const frequency = freq.get(value) ?? 0;
        freq.set(value, frequency + 1);

        while(freq.get(value)! > k) {
            const leftValue = nums[left];
            const leftFrequency = freq.get(leftValue) ?? 0;
            freq.set(leftValue, leftFrequency - 1);
            left++;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
};