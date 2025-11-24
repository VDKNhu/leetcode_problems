function maxSumDivThree(nums: number[]): number {
    const maxSums = Array.from({length: 3}, () => 0);
    for(const num of nums) {
        const prevMaxSums = [...maxSums];

        for(const maxSum of prevMaxSums) {
            const reminder = (maxSum + num) % 3;
            maxSums[reminder] = Math.max(maxSums[reminder], maxSum + num);
        }
    }

    return maxSums[0];
}