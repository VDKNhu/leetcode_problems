function longestSubarray(nums: number[]): number {
    let left = 0, zeroFreq = 0, res = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) zeroFreq++;

        while(zeroFreq > 1) {
            if(nums[left] === 0) {
                zeroFreq--;
            }
            left++;
        }

        const distance = right - left;
        res = Math.max(res, distance);
    }

    return res;
};

function longestSubarrayV1(nums: number[]): number {
    const oneFreq: number[]  = [];
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            oneFreq.push(nums[i]);
            continue;
        }

        let freq = 0;
        while(i < nums.length && nums[i] === 1) {
            freq++;
            i++;
        }
        oneFreq.push(freq);
        i--;
    }
    
    if(oneFreq.length === 1) {
        return oneFreq[0] > 0 ? oneFreq[0] - 1 : 0;
    }

    res = 0;
    for(let i = 0; i < oneFreq.length; i++) {
        if(oneFreq[i] === 0) {
            const oneFreqBefore = oneFreq?.[i - 1] || 0;
            const oneFreqAfter = oneFreq?.[i + 1] || 0;
            res = Math.max(res, oneFreqBefore + oneFreqAfter);
        }
    }

    return res;
};