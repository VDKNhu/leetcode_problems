function findDiagonalOrder(mat: number[][]): number[] {
    let row = 0, col = 0, isUp = true;
    const rows = mat.length;
    const columns = mat[0].length;
    const res: number[] = [];

    while(res.length < rows * columns) {
        if(isUp) {
            while(row >= 0 && col < columns) {
                res.push(mat[row][col]);
                row--;
                col++;
            }

            if(row < 0 && col < columns) row = 0;
            if(col >= columns) {
                row += 2;
                col--;
            }
        } else {
            while(col >= 0 && row < rows) {
                res.push(mat[row][col]);
                row++;
                col--;
            }

            if(col < 0 && row < rows) col = 0;
            if(row >= rows) {
                col += 2;
                row--;
            }
        }

        isUp = !isUp;
    }

    return res;
};