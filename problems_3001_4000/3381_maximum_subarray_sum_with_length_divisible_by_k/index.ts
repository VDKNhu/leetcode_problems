function maxSubarraySum(nums: number[], k: number): number {
    const minPrefixSums: number[] = new Array(k).fill(Number.MAX_SAFE_INTEGER);
    minPrefixSums[k - 1] = 0;
    let prefixSum = 0, res = -Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        res = Math.max(res, prefixSum - minPrefixSums[i % k]);
        minPrefixSums[i % k] = Math.min(minPrefixSums[i % k], prefixSum);
    }
    return res;
};