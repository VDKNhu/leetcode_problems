function rangeAddQueries(n: number, queries: number[][]): number[][] {
    const mat: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for(const query of queries) {
        const r1 = query[0], c1 = query[1], r2 = query[2], c2 = query[3];
        
        mat[r1][c1]++;
        if(r2 + 1 < n) mat[r2 + 1][c1]--;
        if(c2 + 1 < n) mat[r1][c2 + 1]--;
        if(r2 + 1 < n && c2 + 1 < n) mat[r2 + 1][c2 + 1]++;
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i > 0) mat[i][j] += mat[i - 1][j];
            if(j > 0) mat[i][j] += mat[i][j - 1];
            if(i > 0 && j > 0) mat[i][j] -= mat[i - 1][j - 1];
        }
    }

    return mat;
}