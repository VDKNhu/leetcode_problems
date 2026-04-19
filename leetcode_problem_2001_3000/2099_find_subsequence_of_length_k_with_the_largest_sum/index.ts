function maxSubsequence(nums: number[], k: number): number[] {
    const len = nums.length;
    const indexValueArr: { index: number, value: number }[] = [];

    for (let i = 0; i < len; i++) {
        indexValueArr.push({ index: i, value: nums[i] });
    }

    const indexValueDesc = indexValueArr.sort((el1: { index: number, value: number }, el2: { index: number, value: number }) => el2.value - el1.value);

    return indexValueDesc.slice(0, k).sort((el1: { index: number, value: number }, el2: { index: number, value: number }) => el1.index - el2.index).map((el: { index: number, value: number }) => el.value);
};