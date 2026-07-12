class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const len = grid[0].length;
        const visited = new Set();
        const pq = new MinPriorityQueue((entry: [number, number, number]) => entry[0]);
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        pq.enqueue([grid[0][0], 0, 0]);
        visited.add('0,0');

        while(!pq.isEmpty()) {
            const [t, r, c] = pq.dequeue();
            if(r === len - 1 && c === len - 1) {
                return t;
            }

            for(const [dr, dc] of directions) {
                const nextR = r + dr;
                const nextC = c + dc;
                if(
                    nextR < 0 || 
                    nextC < 0 ||
                    nextR >= len || 
                    nextC >= len || 
                    visited.has(`${nextR},${nextC}`)
                ) {
                    continue;
                }

                visited.add(`${nextR},${nextC}`);
                pq.enqueue([Math.max(t, grid[nextR][nextC]), nextR, nextC]);
            }
        }
        return -1;
    }
}
