function hasSameDigits(s: string): boolean {
    const sArr = s.split("").map((char: string) => Number(char));
    for(let i = sArr.length - 2; i > 0; i--) {
        for(let j = 0; j <= i; j++) {
            sArr[j] = (sArr[j] + sArr[j + 1]) % 10;
        }
    }
    return sArr[0] === sArr[1]
};