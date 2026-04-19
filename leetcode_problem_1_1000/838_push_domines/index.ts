function pushDominoes(dominoes: string): string {
    const len = dominoes.length;

    const domMap = {
        'L': -1,
        '.': 0,
        'R': 1
    }

    let queue: number[] = [];
    let result = new Array(len).fill(0);
    let visited = new Array(len).fill(0);
    let depth = 1;

    for (let index = 0; index < len; index++) {
        const domValue = domMap[dominoes.charAt(index)];

        if (domValue) {
            result[index] = domValue;
            visited[index] = depth;
            queue.push(index);
        }
    }

    while (queue.length > 0) {
        depth++;
        let nextQueue: number[] = [];

        for (let domIndex of queue) {
            const direction = result[domIndex];
            const nextIndex = domIndex + direction;

            if (nextIndex >= 0 && nextIndex < len && [0, depth].includes(visited[nextIndex])) {
                result[nextIndex] += direction;
                visited[nextIndex] = depth;
                nextQueue.push(nextIndex);
            }
        }

        queue = nextQueue;
    }

    return result.map((value: number) => {
        if (value === 1) {
            return 'R';
        }

        if (value === -1) {
            return 'L';
        }

        return '.'
    }).join('');
}