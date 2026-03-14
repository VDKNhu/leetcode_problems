function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
    function canCompleteInTime(timeLimit: bigint): boolean {
        let height = 0;
        for (const workerTime of workerTimes) {
            height += Math.floor(
                Math.sqrt((Number(timeLimit) * 2.0 / Number(workerTime)) + 0.25) - 0.5
            )
        }
        return height >= mountainHeight;
    }

    let left = BigInt(1);
    let right = BigInt(1e16)
    let res = BigInt(-1);
    while (left <= right) {
        const mid = (left + right) / BigInt(2);
        if (canCompleteInTime(mid)) {
            right = mid - BigInt(1);
            res = mid;
        } else {
            left = mid + BigInt(1);
        }
    }

    return Number(res);
};