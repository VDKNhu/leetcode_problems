function minTimeToVisitAllPoints(points: number[][]): number {
    let res = 0;
    for(let i = 1; i < points.length; i++) {
        const deltaX = Math.abs(points[i][0] - points[i - 1][0]);
        const deltaY = Math.abs(points[i][1] - points[i - 1][1]);
        res += Math.max(deltaX, deltaY);
    }

    return res;
};