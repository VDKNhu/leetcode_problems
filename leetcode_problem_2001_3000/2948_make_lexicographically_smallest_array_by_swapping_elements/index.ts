function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const len = nums.length;
    const indices = Array.from({ length: len }, (_, index) => index);
    indices.sort((indexA: number, indexB: number) => nums[indexA] - nums[indexB]);
    const result = new Array(len).fill(0);

    let currentIndex = 0;
    while (currentIndex < len) {
        let groupEndIndex = currentIndex + 1;
        while (groupEndIndex < len && nums[indices[groupEndIndex]] - nums[indices[groupEndIndex - 1]] <= limit) {
            groupEndIndex++;
        }

        const sortedGroupIndices = indices.slice(currentIndex, groupEndIndex).sort((indexA: number, indexB: number) => indexA - indexB);
        for (let k = currentIndex; k < groupEndIndex; k++) {
            result[sortedGroupIndices[k - currentIndex]] = nums[indices[k]];
        }
        currentIndex = groupEndIndex;
    }

    return result;
};