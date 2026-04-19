function longestSubsequence(s: string, k: number): number {
    let res = 0;
    let currentValue = 0;

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === '0') {
            res++;
        } else if(res < 30 && (currentValue | (1 << res)) <= k) {
            currentValue |= (1 << res);
            res++;
        }
    }

    return res;
};