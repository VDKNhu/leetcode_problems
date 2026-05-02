function searchMatrix(matrix: number[][], target: number) {
    const rows = matrix.length, cols = matrix[0].length;
    let startIndex = 0, endIndex = rows * cols - 1, firstTrueIndex = -1;
    
    while(startIndex <= endIndex) {
        const pivot = Math.floor((startIndex + endIndex) / 2);
        const rowIndex = Math.floor(pivot / cols);
        const colIndex = pivot % cols;
        if(matrix[rowIndex][colIndex] >= target) {
            firstTrueIndex = pivot;
            endIndex = pivot - 1;
        } else {
            startIndex = pivot + 1;
        }
    }

    if(firstTrueIndex === -1) {
        return false;
    }

    const rowIndex = Math.floor(firstTrueIndex / cols);
    const colIndex = firstTrueIndex % cols;
    return matrix[rowIndex][colIndex] === target;
}