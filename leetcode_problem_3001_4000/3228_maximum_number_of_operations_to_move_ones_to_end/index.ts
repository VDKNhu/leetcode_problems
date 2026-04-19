function maxOperations(s: string): number {
    let res = 0, countOne = 0, i = 0;
    while (i < s.length) {
        if (s.charAt(i) === '1') {
            countOne++;
        } else {
            while (i + 1 < s.length && s.charAt(i + 1) === '0') {
                i++;
            }
            res += countOne;
        }

        i++;
    }

    return res;
};