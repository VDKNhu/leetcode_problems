function minimumOperations(nums: number[]): number {
    return nums.reduce((acc: number, cur: number) => {
        if(cur % 3 === 0) return acc;
        return acc+1;
    }, 0)
};