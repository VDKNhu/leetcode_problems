function maxSideLength(mat: number[][], threshold: number): number {
    const rows = mat.length;
    const cols = mat[0].length;

    const prefixSums = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));
    for(let r = 1; r <= rows; r++) {
        for(let c = 1; c <= cols; c++) {
            prefixSums[r][c] = prefixSums[r - 1][c] + prefixSums[r][c - 1] - prefixSums[r - 1][c - 1] + mat[r - 1][c - 1];
        }
    }

    const getRect = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
    ): number => {
        return prefixSums[x2][y2] - prefixSums[x1 - 1][y2] - prefixSums[x2][y1 - 1] + prefixSums[x1 - 1][y1 - 1];
    };

    const r = Math.min(rows, cols);
    let res = 0;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            for (let k = res + 1; k <= r; k++) {
                if (
                    i + k - 1 <= rows &&
                    j + k - 1 <= cols &&
                    getRect(i, j, i + k - 1, j + k - 1) <= threshold
                ) {
                    res = k;
                } else {
                    break;
                }
            }
        }
    }
    return res;
};