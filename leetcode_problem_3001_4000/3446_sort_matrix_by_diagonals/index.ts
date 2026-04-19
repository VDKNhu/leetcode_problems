function sortMatrix(grid: number[][]): number[][] {
    const len = grid.length;

    for(let i = 0; i < len - 1; i++) {
        sortDiagonal(grid, i, 0, len, false);
    }

    for(let i = 1; i < len - 1; i++) {
        sortDiagonal(grid, 0, i, len, true);
    }

    return grid;
};

function sortDiagonal(grid: number[][], rowStart: number, colStart: number, len: number, isIncreased: boolean) {
    let row = rowStart, col = colStart;
    const diagonals: number[] = [];

    while(row < len && col < len) {
        diagonals.push(grid[row][col]);
        row++;
        col++;
    }

    if(isIncreased) {
        diagonals.sort((d1: number, d2: number) => d1 - d2);
    } else {
        diagonals.sort((d1: number, d2: number) => d2 - d1);
    }

    row = rowStart;
    col = colStart;
    for(let i = 0; i < diagonals.length; i++) {
        grid[row][col] = diagonals[i];
        row++;
        col++;
    }
}