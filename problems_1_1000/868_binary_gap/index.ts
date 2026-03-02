function binaryGap(n: number): number {
    const binaryStr = n.toString(2);
    let res = 0, prev = 0, current = 1;
    while (current < binaryStr.length) {
        if (binaryStr[current] === '1') {
            res = Math.max(res, current - prev);
            prev = current;
            current++;
        } else {
            while (current < binaryStr.length && binaryStr[current] === '0') {
                current++;
            }
        }
    }

    return res;
};