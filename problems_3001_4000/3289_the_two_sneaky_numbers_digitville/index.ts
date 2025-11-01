function getSneakyNumbers(nums: number[]): number[] {
    const set: Set<number> = new Set<number>();
    const res: number[] = [];

    for(const num of nums) {
        if(set.has(num)) {
            if(!res.includes(num)) {
                res.push(num);
            }
        } else {
            set.add(num);
        }
    }

    return res;
};