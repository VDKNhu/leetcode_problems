function minimizeMax(nums: number[], p: number): number {
    nums.sort((el1: number, el2: number) => el1 - el2);

    function checkValidDif(dif: number) {
        let numValidDif = 0;

        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i + 1] - nums[i] <= dif) {
                numValidDif++;
                i++;
            }
        }

        return numValidDif >= p;
    }

    let leftBound = 0, rightBound = nums[nums.length - 1] - nums[0] + 1;
    while(leftBound < rightBound) {
        const midBound = leftBound + Math.floor((rightBound - leftBound) / 2);

        if(checkValidDif(midBound)) {
            rightBound = midBound;
        } else {
            leftBound = midBound + 1;
        }
    }

    return leftBound;
};
