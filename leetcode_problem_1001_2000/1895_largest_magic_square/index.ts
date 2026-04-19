function largestMagicSquare(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length;
    const rowPrefixSum = Array.from({ length: rows + 1}, () => new Array(cols + 1).fill(0));
    const colPrefixSum = Array.from({ length: rows + 1}, () => new Array(cols + 1).fill(0));
    
    for(let row = 0; row < rows; row++) {
        rowPrefixSum[row + 1][1] = grid[row][0];
        for(let col = 1; col < cols; col++) {
            rowPrefixSum[row + 1][col + 1] = rowPrefixSum[row + 1][col] + grid[row][col];
        }
    }

    for(let col = 0; col < cols; col++) {
        colPrefixSum[1][col + 1] = grid[0][col];
        for(let row = 1; row < rows; row++) {
            colPrefixSum[row + 1][col + 1] = colPrefixSum[row][col + 1] + grid[row][col];
        }
    }

    for(let squareSize = Math.min(rows, cols); squareSize > 1; squareSize--) {
        for(let topRow = 0; topRow + squareSize - 1 < rows; topRow++) {
            for(let leftCol = 0; leftCol + squareSize - 1 < cols; leftCol++) {
                const botRow = topRow + squareSize - 1;
                const rightCol = leftCol + squareSize - 1;
                if(isMagicSquare(grid, rowPrefixSum, colPrefixSum, topRow, leftCol, botRow, rightCol)) {
                    return squareSize;
                }
            }
        }
    }

    return 1;
};

function isMagicSquare(grid: number[][], rowPrefixSum: number[][], colPrefixSum: number[][], topRow: number, leftCol: number, botRow: number, rightCol: number): boolean {
    const targetSum = rowPrefixSum[topRow + 1][rightCol + 1] - rowPrefixSum[topRow + 1][leftCol];

    for(let row = topRow + 1; row <= botRow; row++) {
        const sum = rowPrefixSum[row + 1][rightCol + 1] - rowPrefixSum[row + 1][leftCol];
        if(sum !== targetSum) {
            return false;
        }
    }

    for(let col = leftCol + 1; col <= rightCol; col++) {
        const sum = colPrefixSum[botRow + 1][col + 1] - colPrefixSum[topRow][col + 1];
        if(sum !== targetSum) {
            return false;
        }
    }

    let mainDiagonalSum = targetSum;
    for(let row = topRow, col = leftCol; row <= botRow; row++, col++) {
        mainDiagonalSum -= grid[row][col];
    }
    if(mainDiagonalSum !== 0) {
        return false;
    }

    let antiDiagonalSum = targetSum;
    for(let row = topRow, col = rightCol; row <= botRow; row++, col--) {
        antiDiagonalSum -= grid[row][col];
    }
    if(antiDiagonalSum !== 0) {
        return false;
    }

    return true;
}