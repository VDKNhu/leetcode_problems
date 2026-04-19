function setZeroesV1(matrix: number[][]): void {
    const zeroPos: number[][] = [];
    const rLen = matrix.length;
    const cLen = matrix[0].length;

    for(let r = 0; r < rLen; r++) {
        for(let c = 0; c < cLen; c++) {
            if(matrix[r][c] === 0) {
                zeroPos.push([r, c])
            }
        }
    }

    for(let i = 0; i < zeroPos.length; i++) {
        for(let r = 0; r < rLen; r++) {
            matrix[r][zeroPos[i][1]] = 0;
        }

        for(let c = 0; c < cLen; c++) {
            matrix[zeroPos[i][0]][c] = 0;
        }
    }
};

function setZeroesV2(matrix: number[][]): void {
    const rLen = matrix.length;
    const cLen = matrix[0].length;
    let zeroInFirstCol = false

    for (let r = 0; r < rLen; r++) {
        if (matrix[r][0] === 0) {
            zeroInFirstCol = true
        }

        for (let c = 1; c < cLen; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    for (let r = rLen - 1; r >= 0; r--) {
        for (let c = cLen - 1; c >= 1; c--) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }

        if (zeroInFirstCol) {
            matrix[r][0] = 0
        }
    }
}