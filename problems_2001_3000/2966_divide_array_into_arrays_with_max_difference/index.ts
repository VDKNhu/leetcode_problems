function divideArrayV1(nums: number[], k: number): number[][] {
    nums.sort((el1: number, el2: number) => el1 - el2);
    const res: number[][] = [];

    for(let i = 0; i < nums.length; i += 3) {
        if(nums[i + 2] - nums[i] > k) {
            return [];
        }

        res.push([nums[i], nums[i+1], nums[i+2]]);
    }

    return res;
};

function divideArrayV2(nums: number[], k: number): number[][] {
    const maxValue = Math.max(...nums);
    const countEl = new Array(maxValue + 1).fill(0);

    for(let i = 0; i < nums.length; i++) {
        countEl[nums[i]]++;
    }

    const res: number[][] = [];
    let curValue = 0;
    for(let i = 0; i < nums.length; i += 3) {
        const group = new Array(3);
        let j = 0;

        while(curValue <= maxValue && j < 3) {
            if(countEl[curValue] > 0) {
                group[j++] = curValue;
                countEl[curValue]--;
            } else {
                curValue++;
            }
        }

        if(j < 3 || group[2] - group[0] > k) {
            return [];
        }
        res.push(group);
    }

    return res;
};