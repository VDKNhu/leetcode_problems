function numSubmat(mat: number[][]): number {
    const rows = mat.length;
    const columns = mat[0].length;
    const dp: number[][] = Array.from({length: rows}, () => new Array(columns).fill(0));
    let res = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(mat[i][j] === 1) {
                dp[i][j] = (j === 0) ? 1 : dp[i][j - 1] + 1;
            }
        }
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            let minLen = Number.MAX_SAFE_INTEGER;

            for(let botRow = i; botRow >= 0 && minLen > 0; botRow--) {
                minLen = Math.min(minLen, dp[botRow][j]);
                res += minLen;
            }
        }
    }

    return res;
}