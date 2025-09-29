function minScoreTriangulation(values: number[]): number {
    const len = values.length;
    const memo: number[][] = Array.from({length: len}, () => new Array(len).fill(0));

    function findMinScore(start: number, end: number): number {
        if (start + 1 === end) return 0;
        if (memo[start][end] > 0) return memo[start][end];

        let minScore: number = 1 << 30;
        for (let k = start + 1; k < end; k++) {
            const score = findMinScore(start, k) + findMinScore(k, end) + values[start] * values[k] * values[end];
            if (minScore > score) minScore = score;
        }
        memo[start][end] = minScore;
        return minScore;
    }

    return findMinScore(0, len - 1);
};


