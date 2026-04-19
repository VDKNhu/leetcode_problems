function hasAlternatingBits(n: number): boolean {
    const nBinary = n.toString(2);
    for(let i = 1; i < nBinary.length; i++) {
        if(nBinary[i - 1] === nBinary[i]) {
            return false;
        }
    }
    return true;
};