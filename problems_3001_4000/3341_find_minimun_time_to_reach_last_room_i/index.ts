function minTimeToReach(moveTime: number[][]): number {
    const [n, m] = [moveTime.length, moveTime[0].length];
    const dist = Array.from({length: n}, () => new Array(m).fill(Infinity));
    dist[0][0] = 0;

    const pq = new PriorityQueue((a, b) => a[0] - b[0]);
    pq.enqueue([0, 0, 0])

    const dirs = [-1, 0, 1, 0, -1]

    while(true) {
        const [d, i, j] = pq.dequeue() as any;

        if(i === n - 1 && j === m - 1) {
            return d;
        }

        if(d > dist[i][j]) {
            continue;
        }

        for(let k = 0; k < 4; k++) {
            const [nextI, nextJ] = [i + dirs[k], j + dirs[k + 1]];

            if(nextI >= 0 && nextI < n && nextJ >= 0 && nextJ < m) {
                const distance = Math.max(moveTime[nextI][nextJ], dist[i][j]) + 1;

                if(dist[nextI][nextJ] > distance) {
                    dist[nextI][nextJ] = distance;
                    pq.enqueue([distance, nextI, nextJ]);
                }
            }
        }
    }
};