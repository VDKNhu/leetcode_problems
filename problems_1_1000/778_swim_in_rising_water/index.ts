function swimInWater(grid: number[][]): number {
    const directions = [[0, 1], [-1, 0], [1, 0], [0, -1]];

    const n = grid.length;
    const q = new PriorityQueue((a: [number, number, number], b: [number, number, number]) => a[0] - b[0]);
    q.enqueue([grid[0][0], 0, 0]);
    const visited = new Set<string>();
    visited.add("0-0");

    while (q.size() > 0) {
        const [height, row, col] = q.dequeue() as [number, number, number];
        if (row === n - 1 && col === n - 1) return height;

        for (const dir of directions) {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1];

            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || visited.has(`${nextRow}-${nextCol}`)) continue;

            visited.add(`${nextRow}-${nextCol}`);
            q.enqueue([Math.max(grid[nextRow][nextCol], height), nextRow, nextCol]);
        }
    }

    return -1;
};

