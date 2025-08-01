function generate(numRows: number): number[][] {
    let res: number[][] = [[1]];

    for(let i = 1; i < numRows; i++) {
        res[i] = [];
        res[i].push(1);
        for(let j = 1; j < res[i - 1].length; j++) {
            res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
        }
        res[i].push(1);
    }

    return res;
};