function numberOfSubstrings(s: string): number {
    const len = s.length;
    const prev: number[] = new Array(s.length + 1);
    prev[0] = -1;
    let res = 0;

    for(let i = 0; i < len; i++) {
        if(i === 0 || (i > 0 && s[i - 1] === '0')) {
            prev[i + 1] = i;
        } else {
            prev[i + 1] = prev[i];
        }
    }

    for(let right = 1; right <= len; right++) {
        let cnt0 = s[right - 1] === '0' ? 1 : 0;
        let left = right;
        while(left > 0 && cnt0 * cnt0 <= len) {
            const cnt1 = right - prev[left] - cnt0;
            if(cnt0 * cnt0 <= cnt1) {
                res += Math.min(left - prev[left], cnt1 - cnt0 * cnt0 + 1);
            }
            left = prev[left];
            cnt0++;
        }
    }

    return res;
}
