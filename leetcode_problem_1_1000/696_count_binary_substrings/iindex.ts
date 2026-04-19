function countBinarySubstrings(s: string): number {
    let res = 0, prevCount = 0, curCount = 1;

    for(let i = 0; i + 1 < s.length; i++) {
        if(s[i] !== s[i + 1]) {
            res += Math.min(prevCount, curCount);
            prevCount = curCount;
            curCount = 1;
        } else {
            curCount++;
        }
    }

    return res + Math.min(prevCount, curCount);
};