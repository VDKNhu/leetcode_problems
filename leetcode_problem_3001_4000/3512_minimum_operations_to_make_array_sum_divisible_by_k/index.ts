function minOperations(nums: number[], k: number): number {
    let sum = 0;
    for(const num of nums) sum += num;
    return sum % k;
};