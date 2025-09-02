function numberOfPairs(points: number[][]): number {
    const len = points.length;
    let res = 0;

    points.sort((p1: number[], p2: number[]) => p1[0] === p2[0] ? p2[1] - p1[1] : p1[0] - p2[0]);

    for(let i = 0; i < len; i++) {
        const y1 = points[i][1];
        let maxY = -Infinity;

        for(let j = i + 1; j < len; j++) {
            const y2 = points[j][1];

            if(maxY < y2 && y2 <= y1) {
                maxY = y2;
                res++;
            }
        }
    }

    return res;
};