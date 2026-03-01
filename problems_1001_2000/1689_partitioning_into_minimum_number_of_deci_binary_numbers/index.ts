function minPartitions(n: string): number {
    const digits = n.split("").map(d => Number(d));
    return Math.max(...digits);
};

function minPartitionsOptimizeVersion(n: string): number {
    for(let i = 9; i >= 0; i--) {
        if(n.includes(`${i}`)) {
            return i;
        }
    }

    return 0;
};