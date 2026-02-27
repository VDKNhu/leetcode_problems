function hasAllCodes(s: string, k: number): boolean {
    const len = s.length;
    const totalPossibleCodes = 1 << k;

    if(len - k + 1 < totalPossibleCodes) {
        return false;
    }

    const possibleCodes = new Set<string>();
    for(let i = 0; i + k <= len; i++) {
        const curString = s.slice(i, i + k);
        if(!possibleCodes.has(curString)) {
            possibleCodes.add(curString);
        }
    }

    return possibleCodes.size === totalPossibleCodes;
};