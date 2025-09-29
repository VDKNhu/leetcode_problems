function cross(o: number[], a: number[], b: number[]): number {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

function convexHull(points: number[][]): number[][] {
    points.sort((p1: number[], p2: number[]) => p1[0] - p2[0] || p1[1] - p2[1]);
    const lower: number[][] = [], upper: number[][] = [];

    for (const p of points) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
            lower.pop();
        }
        lower.push(p);
    }

    for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
            upper.pop();
        }
        upper.push(p);
    }

    lower.pop();
    upper.pop();
    return lower.concat(upper);
}

function largestTriangleArea(points: number[][]): number {
    const hull = convexHull(points);
    const len = hull.length;
    let res = 0.0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let k = (j + 1) % len;
            let maxArea = 0.0;
            while (true) {
                const nextK = (k + 1) % len;
                const area1 = Math.abs(cross(hull[i], hull[j], hull[k])) / 2;
                const area2 = Math.abs(cross(hull[i], hull[j], hull[nextK])) / 2;
                if (area2 > area1) {
                    k = nextK;
                } else {
                    maxArea = area1;
                    break;
                }
            }
            if (maxArea > res) res = maxArea;
        }
    }

    return res;
}