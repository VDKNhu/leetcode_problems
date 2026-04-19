function pacificAtlantic(heights: number[][]): number[][] {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const rows = heights.length, cols = heights[0].length;
    const reachableCount = Array.from({ length: rows }, () => new Array(cols).fill(0));
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

    function dfs(row: number, col: number) {
        if(visited[row][col]) return;

        reachableCount[row][col]++;
        visited[row][col] = true;

        const curHeight = heights[row][col];
        for(const dir of directions) {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1];

            if(curHeight <= heights?.[nextRow]?.[nextCol]) {
                dfs(nextRow, nextCol);
            }
        }
    }

    for(let col = 0; col < cols; col++) {
        dfs(0, col);
    }

    for(let row = 0; row < rows; row++) {
        dfs(row, 0);
    }

    visited.forEach(row => row.fill(false));
    for(let col = 0; col < cols; col++) {
        dfs(rows - 1, col);
    }

    for(let row = 0; row < rows; row++) {
        dfs(row, cols - 1);
    }

    const res: [number, number][] = [];
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(reachableCount[r][c] === 2) res.push([r, c])
        }
    }
    return res;
};