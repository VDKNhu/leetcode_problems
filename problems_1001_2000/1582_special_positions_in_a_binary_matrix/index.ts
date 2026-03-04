function numSpecial(mat: number[][]): number {
    const rows = mat.length, cols = mat[0].length;
    const rowCount = new Array(rows).fill(0);
    const colCount = new Array(cols).fill(0);
    let res = 0;

    for(let r = 0; r < rows; r++) {
        let count = 0;
        for(let c = 0; c < cols; c++) {
            count += mat[r][c];
        }
        rowCount[r] = count;
    }

    for(let c = 0; c < cols; c++) {
        let count = 0;
        for(let r = 0; r < rows; r++) {
            count += mat[r][c];
        }
        colCount[c] = count;
    }

    for(let r = 0; r < rows; r++) {
        if(rowCount[r] > 1) {
            continue;
        }
        for(let c = 0; c < cols; c++) {
            if(mat[r][c] && colCount[c] === 1) {
                res++;
            }
        }
    }

    return res;
};