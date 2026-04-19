function maxFrequency(nums: number[], k: number, numOperations: number): number {
    const freq: Record<number, number> = {}, diff: Record<number, number> = {};
    for(const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        diff[num] = (diff[num] || 0);
        diff[num - k] = (diff[num - k] || 0) + 1;
        diff[num + k + 1] = (diff[num + k + 1] || 0) - 1;
    }

    const sortedKeys = Object.keys(diff).map(Number).sort((key1: number, key2: number) => key1 - key2);
    let attemps = 0, res = 0;
    for(const key of sortedKeys) {
        attemps += diff[key];

        const currentAttemp = Math.min(attemps, (freq[key] || 0) + numOperations)
        res = Math.max(res, currentAttemp);
    }

    return res;
};