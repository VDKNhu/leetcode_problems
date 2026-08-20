function resultArray(nums: number[]): number[] {
    const firstArr: number[] = [nums[0]];
    const secondArr: number[] = [nums[1]];
    for(const num of nums.slice(2)) {
        const firstLastValue = firstArr[firstArr.length - 1];
        const secondLastValue = secondArr[secondArr.length - 1];
        if(firstLastValue > secondLastValue) {
            firstArr.push(num);
        } else {
            secondArr.push(num);
        }
    }
    return firstArr.concat(secondArr);
};