function longestBalanced(nums: number[]): number {
    const seen = new Int32Array(Math.max(...nums) + 1);
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        if(res > nums.length - i) break;

        let gap = 0;
        for(let j = i; j < nums.length; j++) {
            const val = nums[j];
            if(seen[val] !== i + 1) {
                seen[val] = i + 1;
                gap += (val & 1) === 0 ? 1 : -1;
            }

            if(gap === 0) {
                res = Math.max(res, j - i + 1);
            }
        }
    }

    return res;
};