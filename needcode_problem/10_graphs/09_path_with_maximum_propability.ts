class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
        const adj = new Map();
        const len = edges.length;

        for(let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for(let i = 0; i < len; i++) {
            const [src, dst] = edges[i];
            adj.get(src).push([dst, succProb[i]]);
            adj.get(dst).push([src, succProb[i]]);
        }

        const pq = new MaxPriorityQueue((x: [number, number]) => x[0]);
        pq.enqueue([1, start_node]);
        const visited = new Set();

        while(!pq.isEmpty()) {
            const [prod, cur] = pq.dequeue();
            visited.add(cur);
            if(cur === end_node) {
                return prod;
            }
            for(const [nei, edgeProd] of adj.get(cur)) {
                if(!visited.has(nei)) {
                    pq.enqueue([prod * edgeProd, nei]);
                }
            }
        }

        return 0.0;
    }
}
