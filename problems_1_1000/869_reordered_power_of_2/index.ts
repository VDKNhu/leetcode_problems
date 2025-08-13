function reorderedPowerOf2(n: number): boolean {
    if (n === 1) return true;

    const freq = calculateFreq(n);
    const numOfDigits = freq.reduce((acc: number, cur: number) => acc + cur, 0);

    let minValue = 1;
    while (minValue <= Math.pow(10, numOfDigits - 1)) {
        minValue *= 2;
    }

    for(let value = minValue; value <= Math.pow(10, numOfDigits) - 1; ) {
        const valueFreq = calculateFreq(value);
        let isValid = true;
        
        for(let j = 0; j < 10; j++) {
            if(freq[j] !== valueFreq[j]) {
                isValid = false;
                break;
            }
        }

        if(isValid) return true;
        value *= 2;
    }

    return false;
};

function calculateFreq(n: number): number[] {
    const freq: number[] = new Array(10).fill(0);
    let tempN = n;

    while(tempN > 0) {
        const value = tempN % 10;
        freq[value]++;
        tempN = (tempN - value) / 10;
    }

    return freq;
}
