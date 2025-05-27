function sortColors(nums: number[]): void {
  let zeroIndex = -1;
  let twoIndex = nums.length;
  let curIndex = 0;

  while (curIndex < twoIndex) {
    if (nums[curIndex] === 0) {
      zeroIndex++;
      [nums[zeroIndex], nums[curIndex]] = [nums[curIndex], nums[zeroIndex]];
      curIndex++;
    } else if (nums[curIndex] === 2) {
      twoIndex--;
      [nums[twoIndex], nums[curIndex]] = [nums[curIndex], nums[twoIndex]];
    } else {
      curIndex++;
    }
  }
}
