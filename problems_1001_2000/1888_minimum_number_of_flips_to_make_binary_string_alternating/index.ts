function minFlips(s: string): number {
    const len = s.length;
    const alternatingPattern = '01';

    let mismatchCount = 0;
    for(let i = 0; i < len; i++) {
        if(s[i] !== alternatingPattern[i & 1]) {
            mismatchCount++;
        }
    }

    let res = Math.min(mismatchCount, len - mismatchCount);
    for(let i = 0; i < len; i++) {
        if(s[i] !== alternatingPattern[i & 1]) {
            mismatchCount--;
        }

        if(s[i] !== alternatingPattern[(i + len) & 1]) {
            mismatchCount++;
        }

        res = Math.min(res, mismatchCount, len - mismatchCount);
    }

    return res;
};