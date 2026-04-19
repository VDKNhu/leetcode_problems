function minSwaps(grid: number[][]): number {
    const len = grid[0].length;
    const rightMostOnePositions: number[] = new Array(len).fill(-1);

    for(let r = 0; r < len; r++) {
        for(let c = len - 1; c >= 0; c--) {
            if(grid[r][c] === 1) {
                rightMostOnePositions[r] = c;
                break;
            }
        }
    }

    let res = 0;
    for(let r = 0; r < len; r++) {
        let replaceR = -1;
        for(let currentR = r; currentR < len; currentR++) {
            if(rightMostOnePositions[currentR] <= r) {
                res += currentR - r;
                replaceR = currentR;
                break;
            }
        }

        if(replaceR === -1) {
            return -1;
        }

        for(let targetR = replaceR; targetR > r; targetR--) {
            [rightMostOnePositions[targetR], rightMostOnePositions[targetR - 1]] = [rightMostOnePositions[targetR - 1], rightMostOnePositions[targetR]];
        }
    }

    return res;
};