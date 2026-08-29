function lexicographicallySmallestArray(
  nums: number[],
  limit: number
): number[] {
  let len = nums.length;
  let indices = nums.map((_, index: number) => index);
  let result: number[] = new Array(len).fill(0);

  indices.sort((a: number, b: number) => nums[a] - nums[b]);

  for (let i = 0; i < len; ) {
    let j = i + 1;

    while (j < len && nums[indices[j]] - nums[indices[j - 1]] <= limit) {
      j++;
    }

    let sortedIndices = indices
      .slice(i, j)
      .sort((a: number, b: number) => a - b);
    for (let k = i; k < j; k++) {
      result[sortedIndices[k - i]] = nums[indices[k]];
    }

    i = j;
  }

  return result;
}

function lexicographicallySmallestArrayV2(nums: number[], limit: number): number[] {
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