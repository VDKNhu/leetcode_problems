function maxMatrixSum(matrix: number[][]): number {
    let negativeCount = 0, sum = 0, minAbsValue = Infinity;

    for(const row of matrix) {
        for(const el of row) {
            if(el < 0) {
                negativeCount++;
            }

            const absValue = Math.abs(el);
            sum += absValue;
            minAbsValue = Math.min(minAbsValue, absValue);
        }
    }

    return negativeCount % 2 === 0 ? sum : sum - 2 * minAbsValue;
};