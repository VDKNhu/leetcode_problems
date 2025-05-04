function largestDivisibleSubset(nums: number[]): number[] {
    const len = nums.length;
    const sortedNums: number[] = nums.sort((el1: number, el2: number) => el1 - el2);
    let maxSizeIndex = 0;
    const numSizes = new Array(len).fill(1);

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(sortedNums[i] % sortedNums[j] === 0) {
                numSizes[i] = Math.max(numSizes[i], numSizes[j] + 1);
            }

            if(numSizes[maxSizeIndex] < numSizes[i]) {
                maxSizeIndex = i;
            }
        }
    }

    let currentSize = numSizes[maxSizeIndex];
    let result: number[] = [];
    for(let i = maxSizeIndex; i >= 0; i--) {
        if(sortedNums[maxSizeIndex] % sortedNums[i] === 0 && numSizes[i] === currentSize) {
            result.push(sortedNums[i]);
            maxSizeIndex = i;
            currentSize--;
        }
    }

    return result.reverse()
};
