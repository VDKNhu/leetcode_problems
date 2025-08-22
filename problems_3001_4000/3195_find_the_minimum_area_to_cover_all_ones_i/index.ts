function minimumArea(grid: number[][]): number {
    let startArr: number[] = [], endArr: number[] = [];
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                if(startArr.length === 0) {
                    startArr = [row, col];
                } 

                if(endArr.length === 0) {
                    endArr = [row, col];    
                }

                if(startArr.length && col < startArr[1]) {
                    startArr[1] = col;
                }

                if(endArr.length && col > endArr[1]) {
                    endArr[1] = col;
                }

                if(endArr.length && row > endArr[0]) {
                    endArr[0] = row;
                }
            }
        }
    }

    return (endArr[1] - startArr[1] + 1) * (endArr[0] - startArr[0] + 1);
};

function minimumAreaV1(grid: number[][]): number {
    let rowStart = 0, rowEnd = -1, colStart = 0, colEnd = -1;
    let checkEndRow = false, checkEndCol = false;
    const rows = grid.length;
    const columns = grid[0].length;

    let rowIndex = 0;
    while(rowIndex < rows) {
        for(let col = 0; col < columns; col++) {
            if(!checkEndRow) {
                if(grid[rowIndex][col] === 1) {
                    rowStart = rowIndex;
                    checkEndRow = true;
                }
            } else {
                if(grid[rowIndex][col] === 1) {
                    rowEnd = rowIndex;
                    continue;
                }
            }
        }

        rowIndex++;
    }
    rowEnd = rowEnd < 0 ? rowStart : rowEnd;

    let colIndex = 0;
    while(colIndex < columns) {
        for(let row = 0; row < rows; row++) {
            if(!checkEndCol) {
                if(grid[row][colIndex] === 1) {
                    colStart = colIndex;
                    checkEndCol = true;
                }
            } else {
                if(grid[row][colIndex] === 1) {
                    colEnd = colIndex;
                    continue;
                }
            }
        }

        colIndex++;
    }
    colEnd = colEnd < 0 ? colStart : colEnd;

    return (rowEnd - rowStart + 1) * (colEnd - colStart + 1);
};