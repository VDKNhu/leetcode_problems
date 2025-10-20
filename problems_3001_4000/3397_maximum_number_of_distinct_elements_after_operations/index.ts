function maxDistinctElements(nums: number[], k: number): number {
    if (k >= (nums.length / 2)) {
        return nums.length;
    }
    
    let res = 0, prevValue = -Infinity;
    nums.sort((num1: number, num2: number) => num1 - num2);

    for(const num of nums) {
        const lowerBound = Math.max(prevValue + 1, num - k);
        const assignedValue = Math.min(lowerBound, num + k);

        if(assignedValue > prevValue) {
            res++;
            prevValue = assignedValue;
        }
    }

    return res;
};