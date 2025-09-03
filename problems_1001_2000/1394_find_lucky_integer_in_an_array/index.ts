function findLucky(arr: number[]): number {
    const arrFreq: {[key: number]: number} = {};
    const res: number[] = [-1];

    for(let i = 0; i < arr.length; i++) {
        if(!(arr[i] in arrFreq)) {
            arrFreq[arr[i]] = 1;
        } else {
            arrFreq[arr[i]]++;
        }
    }

    for(const key of Object.keys(arrFreq)) {
        if(arrFreq[Number(key)] === Number(key)) {
            res.push(Number(key));
        }
    }

    return Math.max(...res);
};