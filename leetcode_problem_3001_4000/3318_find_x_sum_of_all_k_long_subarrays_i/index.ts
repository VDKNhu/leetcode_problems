function findXSum(nums: number[], k: number, x: number): number[] {
    const len = nums.length;
    const res: number[] = new Array(len - k + 1).fill(0);
    const freq: Map<number, number> = new Map();

    for(let i = 0; i < k; i++) {
        if(!freq.has(nums[i])) {
            freq.set(nums[i], 1);
        } else {
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        }
    }

    let start = -1;
    for(let i = 0; i < len - k + 1; i++) {
        if(start >= 0) {
            if(i + k - 1 >= len) break;

            freq.set(nums[i + k - 1], (freq.get(nums[i + k - 1]) || 0) + 1);
            if(freq.get(nums[start]) === 1) {
                freq.delete(nums[start])
            } else {
                freq.set(nums[start], (freq.get(nums[start]) || 0) - 1);
            }
        }

        const keys = Array.from(freq.keys());
        const selectedKeys = keys.length < x 
            ? keys 
            : keys
                .sort((key1: number, key2: number) => (freq.get(key2) || 0) - (freq.get(key1) || 0) || key2 - key1)
                .slice(0, x);

        for(let j = 0; j < selectedKeys.length; j++) {
            res[i] += selectedKeys[j] * (freq.get(selectedKeys[j]) || 0);
        }
        start = i;
    }
    
    return res;
};