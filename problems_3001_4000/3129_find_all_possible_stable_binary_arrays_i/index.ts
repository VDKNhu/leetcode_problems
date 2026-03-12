function numberOfStableArrays(zero: number, one: number, limit: number): number {
    const MOD = 1e9 + 7;
    let dp = Array.from({ length: zero + 1 }, () => Array.from({ length: one + 1 }, () => [-1, -1]));

    function countValidArrays(remainingZeros: number, remainingOnes: number, ending: number): number {
        if (remainingZeros < 0 || remainingOnes < 0) return 0;

        if (remainingZeros === 0) {
            return (ending === 1 && remainingOnes <= limit) ? 1 : 0;
        }

        if (remainingOnes === 0) {
            return (ending === 0 && remainingZeros <= limit) ? 1 : 0;
        }

        let result = dp[remainingZeros][remainingOnes][ending];
        if (result !== -1) {
            return result;
        }

        if (ending === 0) {
            result = (
                countValidArrays(remainingZeros - 1, remainingOnes, 0) +
                countValidArrays(remainingZeros - 1, remainingOnes, 1) -
                countValidArrays(remainingZeros - limit - 1, remainingOnes, 1) + 
                MOD
            ) % MOD;
        } else {
            result = (
                countValidArrays(remainingZeros, remainingOnes - 1, 0) +
                countValidArrays(remainingZeros, remainingOnes - 1, 1) -
                countValidArrays(remainingZeros, remainingOnes - limit - 1, 0) + 
                MOD
            ) % MOD;
        }

        dp[remainingZeros][remainingOnes][ending] = result;
        return result;
    }

    return (countValidArrays(zero, one, 0) + countValidArrays(zero, one, 1)) % MOD;
};