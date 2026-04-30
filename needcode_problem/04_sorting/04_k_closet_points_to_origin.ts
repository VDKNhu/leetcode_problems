class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number) {
        function euclideanDistance(x: number, y: number) {
            return x ** 2 + y ** 2;
        }

        const head = new PriorityQueue(
            (p1: number[], p2: number[]) => euclideanDistance(p1[0], p1[1]) - euclideanDistance(p2[0], p2[1]),
            points
        );

        const res = [];
        for(let i = 0; i < k; i++) {
            res.push(head.dequeue());
        }
        return res;
    }
}
