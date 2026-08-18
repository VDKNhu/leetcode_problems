function largestInteger(nums: number[], k: number): number {
    if (k === 1) {
        const hash = new Map();
        for (const num of nums) {
            hash.set(num, (hash.get(num) || 0) + 1);
        }
        let maxValue = -1;
        for (const [value, freq] of hash.entries()) {
            if (value > maxValue && freq === 1) {
                maxValue = value;
            }
        }
        return maxValue;
    }

    const len = nums.length;
    if (k === len) {
        return Math.max(...nums);
    }

    const first = nums[0], last = nums[len - 1];
    const isFirstValid = nums.slice(1).findIndex(x => x === first) < 0;
    const isLastValid = nums.slice(0, len - 1).findIndex(x => x === last) < 0;
    if (isFirstValid && isLastValid) {
        return first > last ? first : last;
    } else if (isFirstValid) {
        return first;
    } else if (isLastValid) {
        return last;
    }
    return -1;
};