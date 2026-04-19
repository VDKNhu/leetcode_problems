function numMagicSquaresInside(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    function countMagicSquare(startRow: number, startCol: number): number {
        if(startRow + 3 > rows || startCol + 3 > cols) {
            return 0;
        }

        const countValues = new Array(16).fill(0);
        const rowSums = new Array(3).fill(0);
        const colSums = new Array(3).fill(0);
        let mainDiagnalSum = 0, antiDiagnalSum = 0;

        for(let r = startRow; r < startRow + 3; r++) {
            for(let c = startCol; c < startCol + 3; c++) {
                const value = grid[r][c];

                if(++countValues[value] > 1 || value > 9 || value < 1) {
                    return 0;
                }

                const relativeRow = r - startRow, relativeCol = c - startCol;
                rowSums[relativeRow] += value;
                colSums[relativeCol] += value;

                if(relativeRow === relativeCol) {
                    mainDiagnalSum += value;
                }

                if(relativeRow === 2 - relativeCol) {
                    antiDiagnalSum += value;
                }
            }
        }

        if(mainDiagnalSum !== antiDiagnalSum) {
            return 0;
        }

        for(let i = 0; i < 3; i++) {
            if(rowSums[i] !== mainDiagnalSum || colSums[i] !== mainDiagnalSum) {
                return 0;
            }
        }

        return 1;
    }

    let res = 0;
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            res += countMagicSquare(r, c);
        }
    }

    return res;
};