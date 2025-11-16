function numSub(s: string): number {
    const MOD = 1000000007;
    const chars = s.split("");
    let freq = 0, res = 0;
    for(const char of chars) {
        if(char === "0") {
            res += freq * (freq + 1) / 2;
            freq = 0;
            continue;
        } else {
            freq++;
        }
    }

    res += freq * (freq + 1) / 2;
    return res % MOD;
};