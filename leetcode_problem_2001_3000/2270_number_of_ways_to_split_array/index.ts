function waysToSplitArray(nums: number[]): number {
  let mapArr = new Array(nums.length + 1).fill(0);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    mapArr[i + 1] = mapArr[i] + nums[i];
  }

  const sum = mapArr[mapArr.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (mapArr[i + 1] >= sum - mapArr[i + 1] && i < nums.length - 1) {
      result++;
    }
  }

  return result;
}
