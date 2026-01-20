function minBitwiseArray(nums: number[]): number[] {
    const res: number[] = [];
    for(const num of nums) {
        if(num === 2) {
            res.push(-1);
        } else {
            for(let i = 1; i <= 32; i++) {
                if(((num >> i) & 1) === 0) {
                    const value = num ^ (1 << (i - 1));
                    res.push(value);
                    break;
                } 
            }
        }
    }

    return res;
};