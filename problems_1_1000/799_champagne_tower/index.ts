function champagneTower(poured: number, query_row: number, query_glass: number): number {
    let currentRow = [poured];

    for(let rowIndex = 1; rowIndex <= query_row; rowIndex++) {
        const nextRow = new Array(rowIndex + 1).fill(0);
        for(let glassIndex = 0; glassIndex < rowIndex; glassIndex++) {
            if(currentRow[glassIndex] > 1) {
                const overflow = currentRow[glassIndex] - 1;
                nextRow[glassIndex] += overflow / 2;
                nextRow[glassIndex + 1] += overflow / 2;
            }
        }

        currentRow = nextRow;
    }

    return Math.min(1, currentRow[query_glass]);
};