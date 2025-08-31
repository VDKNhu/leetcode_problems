function isValidSudoku(board: string[][]): boolean {
    for(let i = 0; i < 9; i++) {
        const rowSet = new Set<string>();
        const colSet = new Set<string>();
        const boxSet = new Set<string>();

        for(let j = 0; j < 9; j++) {
            const rowValue = board[i][j];
            const colValue = board[j][i];
            const rowBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const colBox = (i % 3) * 3 + (j % 3);
            const boxValue = board[rowBox][colBox];

            if(rowValue !== '.') {
                if(rowSet.has(rowValue)) return false;
                rowSet.add(rowValue);
            }

            if(colValue !== '.') {
                if(colSet.has(colValue)) return false;
                colSet.add(colValue);
            }

            if(boxValue !== '.') {
                if(boxSet.has(boxValue)) return false;
                boxSet.add(boxValue);
            }
        }
    }

    return true;
};

function isValidSudokuV1(board: string[][]): boolean {
    let mapFreq = new Array(9).fill(0);
    for(let row = 0; row < 9; row++) {
        mapFreq = new Array(9).fill(0);
        for(let col = 0; col < 9; col++) {
            mapFreq[Number(board[row][col]) - 1]++;
            if(mapFreq[Number(board[row][col]) - 1] > 1) return false;
        }
    }

    for(let col = 0; col < 9; col++) {
        mapFreq = new Array(9).fill(0);
        for(let row = 0; row < 9; row++) {
            mapFreq[Number(board[row][col]) - 1]++;
            if(mapFreq[Number(board[row][col]) - 1] > 1) return false;
        }
    }

    for(let subBox = 0; subBox < 9; subBox++) {
        const rowIndex = Math.floor(subBox / 3) * 3;
        const colIndex = (subBox % 3) * 3;
        mapFreq = new Array(9).fill(0);

        for(let row = 0; row < 3; row++) {
            for(let col = 0; col < 3; col++) {
                mapFreq[Number(board[rowIndex + row][colIndex + col]) - 1]++;
                if(mapFreq[Number(board[rowIndex + row][colIndex + col]) - 1] > 1) return false;
            }
        }
    }

    return true;
};