function isZeroArray(nums: number[], queries: number[][]): boolean {
    const len = nums.length;
    const difArray = new Array(len + 1).fill(0);
    let currentSum = 0;

    for(const [lIndex, rIndex] of queries) {
        ++difArray[lIndex];
        --difArray[rIndex + 1];
    }

    for(let i = 0; i < len; i++) {
        currentSum += difArray[i];

        if(currentSum < nums[i]) {
            return false;
        }
    }

    return true;
};