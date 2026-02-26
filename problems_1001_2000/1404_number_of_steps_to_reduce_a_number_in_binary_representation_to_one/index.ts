function numSteps(s: string): number {
    let res = 0, hasCarry = false;

    for(let i = s.length - 1; i > 0; i--) {
        let currentBit = s[i];

        if(hasCarry) {
            if(currentBit === '0') {
                currentBit = '1';
                hasCarry = false;
            } else {
                currentBit = '0';
            }
        }

        if(currentBit === '1') {
            res++;
            hasCarry = true;
        }

        res++;
    }

    if(hasCarry) {
        res++;
    }

    return res;
};