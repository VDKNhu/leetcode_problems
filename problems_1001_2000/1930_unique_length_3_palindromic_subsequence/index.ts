function countPalindromicSubsequence(s: string): number {
    let res = 0;
    const aCode = 'a'.charCodeAt(0);

    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + aCode);
        const startIndex = s.indexOf(char);
        const endIndex = s.lastIndexOf(char);

        let uniqueMiddleCharsMask = 0;
        for(let midIndex = startIndex + 1; midIndex < endIndex; midIndex++) {
            const charBitPosition = s.charCodeAt(midIndex) - aCode;       
            if(((uniqueMiddleCharsMask >> charBitPosition) & 1) ^ 1) {
                uniqueMiddleCharsMask |= 1 << charBitPosition;
                res++;
            }
        }
    }

    return res;
}