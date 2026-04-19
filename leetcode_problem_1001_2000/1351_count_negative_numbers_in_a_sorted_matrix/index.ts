function countNegatives(grid: number[][]): number {
    const rows = grid.length, cols = grid[0].length;
    let res = 0;

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] < 0) {
                res += cols - c;
                break;
            }
        }
    }

    return res;
};