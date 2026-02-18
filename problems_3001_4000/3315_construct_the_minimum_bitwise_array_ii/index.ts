function minBitwiseArray(nums: number[]): number[] {
    let res = [];

    for(const num of nums) {
        if(num === 2) {
            res.push(-1);
            continue;
        }
        
        for(let bits = 1; bits < 32; bits++) {
            if(((num >> bits) & 1) ^ 1) {
                res.push(num ^ (1 << (bits - 1)));
                break;
            }
        }
    }

    return res;
};