function bitwiseComplement(n: number): number {
    if(n === 0) return 1;
    if(n === 1) return 0;
    
    let res = '';

    while(n > 1) {
        res = (n % 2 === 1 ? 0 : 1).toString() + res;
        n = Math.floor(n / 2);
    }

    return n === 1 ? parseInt(res, 2) : parseInt('1' + res, 2);
};