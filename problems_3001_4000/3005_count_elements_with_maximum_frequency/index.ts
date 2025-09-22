function maxFrequencyElements(nums: number[]): number {
    const freqMap = new Map<number, number>();
    let maxFreq = 0, res = 0;
    for(const num of nums) {
        if(!freqMap.has(num)) {
            freqMap.set(num, 0);
        }

        const freq = (freqMap.get(num) || 0) + 1;
        freqMap.set(num, freq);
        maxFreq = Math.max(maxFreq, freq);
    }

    for(const freq of freqMap.values()) {
        if(freq === maxFreq) res += freq;
    }

    return res;
};