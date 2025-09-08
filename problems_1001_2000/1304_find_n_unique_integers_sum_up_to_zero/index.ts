function sumZero(n: number): number[] {
    const res: number[] = [];
    for(let i = 1; i <= Math.floor(n / 2); i++) {
        res.push(i);
        res.push(-i);
    }

    return n % 2 === 0 ? res : [...res, 0];
};