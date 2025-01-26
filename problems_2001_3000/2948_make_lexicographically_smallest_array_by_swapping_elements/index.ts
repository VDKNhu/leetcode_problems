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
