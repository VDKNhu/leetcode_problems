function countTriples(n: number): number {
    let res = 0;

    for(let a = 1; a < n; a++) {
        for(let b = 1; b < n; b++) {
            const sum = a ** 2 + b ** 2;
            const c = Math.floor(Math.sqrt(sum));

            if(c <= n && c ** 2 === sum) {
                res++;
            }
        }
    }

    return res;
};

function countTriplesV2(n: number): number {
    let res = 0;

    for(let a = 1; a < n; a++) {
        for(let b = a; a ** 2 + b ** 2 <= n ** 2; b++) {
            const sum = a ** 2 + b ** 2;
            const c = Math.floor(Math.sqrt(sum));

            if(c ** 2 === sum) {
                res += a === b ? 1 : 2;
            }
        }
    }

    return res;
};