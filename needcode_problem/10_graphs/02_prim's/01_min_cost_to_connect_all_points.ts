class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const len = points.length;
        const adj = new Map();

        for(let i = 0; i < len; i++) {
            adj.set(i, []);
        }

        for(let i = 0; i < len; i++) {
            const [x1, y1] = points[i];
            for(let j = i + 1; j < len; j++) {
                const [x2, y2] = points[j];
                const dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
                adj.get(i).push([dist, j]);
                adj.get(j).push([dist, i]);
            }
        }

        let res = 0;
        const visited = new Set();
        const pq = new MinPriorityQueue((entry: [number, number]) => entry[0]);
        pq.enqueue([0, 0]);

        while(visited.size < len) {
            const [dist, i] = pq.dequeue();
            if(visited.has(i)) {
                continue;
            }
            res += dist;
            visited.add(i);
            for(const [neiDist, j] of adj.get(i)) {
                if(!visited.has(j)) {
                    pq.enqueue([neiDist, j]);
                }
            }
        }

        return res;
    }
}
