function numSubseq(nums: number[], target: number): number {
    const MOD = 1e9 + 7;
    const len = nums.length;

    let res = 0;
    let left = 0, right = len - 1;

    nums.sort((el1: number, el2: number) => el1 - el2);
    
    const fastExpo = new Array(len + 1).fill(1);
    for(let i = 1; i <= len; i++) {
        fastExpo[i] = (fastExpo[i - 1] * 2) % MOD;
    }

    while(left <= right) {
        if(nums[left] + nums[right] <= target) {
            res = (res + fastExpo[right - left]) % MOD;
            left++;
        } else {
            right--;
        }
    }

    return res;
};