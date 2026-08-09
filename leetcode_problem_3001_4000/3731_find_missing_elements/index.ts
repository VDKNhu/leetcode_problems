function findMissingElements(nums: number[]): number[] {
    const len = nums.length;
    const lookup = new Array(101);
    let min = Infinity, max = -Infinity;
    for(const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        lookup[num] = 1;
    }

    let res: number[] = [];
    for(let i = min; i <= max; i++) {
        if(lookup[i] !== 1) {
            res.push(i);
        }
    }
    return res;
};