function mostPoints(questions: number[][]): number {
    const len = questions.length;
    let memo = new Array(len).fill(0);

    function findMostPoints(index: number): number {
        if (index >= len) {
            return 0;
        }

        if (memo[index]) {
            return memo[index];
        }

        const [points, brainpower] = questions[index];
        return (memo[index] = Math.max(points + findMostPoints(index + brainpower + 1), findMostPoints(index + 1)));
    }

    return findMostPoints(0);
};

