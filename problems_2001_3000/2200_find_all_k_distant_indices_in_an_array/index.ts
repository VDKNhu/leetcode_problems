function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const res: number[] = [];
    const len = nums.length;
    let right = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] === key) {
            const left = Math.max(right, i - k);
            right = Math.min(len - 1, i + k) + 1;

            for (let j = left; j < right; j++) {
                res.push(j);
            }
        }
    }

    return res;
};