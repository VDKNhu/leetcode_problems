function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = 0, maxArea = 0;

    for(let i = 0; i < dimensions.length; i++) {
        const length = dimensions[i][0];
        const width = dimensions[i][1];
        const diagonal = Math.pow(length, 2) + Math.pow(width, 2);

        if(diagonal === maxDiagonal) {
            const area = length * width;
            maxArea = Math.max(maxArea, area);
            continue;
        } 

        if(diagonal > maxDiagonal) {
            const area = length * width;
            maxArea = area;
            maxDiagonal = diagonal;
        }
    }

    return maxArea;
};