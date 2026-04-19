function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const binaryRemainderArr: number[] = [];
    for(const num of nums) {
        binaryRemainderArr.push(num % modulo === k ? 1 : 0);
    }

    let res = 0;
    let cumulativeSum = 0;
    let cumulativeSumMap = new Map();
    cumulativeSumMap.set(0, 1);

    for(const bin of binaryRemainderArr) {
        cumulativeSum += bin;

        const adjustedSum = (cumulativeSum - k + modulo) % modulo;

        res += cumulativeSumMap.get(adjustedSum) || 0;
        cumulativeSumMap.set(cumulativeSum % modulo, (cumulativeSumMap.get(cumulativeSum % modulo) || 0) + 1)
    }

    return res;
};