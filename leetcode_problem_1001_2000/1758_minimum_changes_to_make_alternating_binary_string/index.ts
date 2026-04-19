function minOperations(s: string): number {
    let resStartOne = s[0] === '0' ? 1 : 0, prevStartOne = '1';
    for(let i = 1; i < s.length; i++) {
        if(s[i] === prevStartOne) {
            resStartOne++;
            prevStartOne = s[i] === '1' ? '0' : '1';
        } else {
            prevStartOne = s[i];
        }
    }

    let resStartZero = s[0] === '1' ? 1 : 0, prevStartZero = '0';
    for(let i = 1; i < s.length; i++) {
        if(s[i] === prevStartZero) {
            resStartZero++;
            prevStartZero = s[i] === '1' ? '0' : '1';
        } else {
            prevStartZero = s[i];
        }
    }

    return resStartOne > resStartZero ? resStartZero : resStartOne;
};

function minOperationsOptimizeVersion(s: string): number {
    let resStartZero = 0, resStartOne = 0;
    for(let i = 0; i < s.length; i++) {
        const expectStartZero = i % 2 === 0 ? '0' : '1';
        const expectStartOne = i % 2 === 0 ? '1' : '0';
        if(s[i] !== expectStartZero) resStartZero++;
        if(s[i] !== expectStartOne) resStartOne++;
    }

    return Math.min(resStartZero, resStartOne);
};