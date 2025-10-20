function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce((acc: number, cur: string) => {
        cur.includes("+") ? acc++ : acc--;
        return acc;
    }, 0);
};