function fractionToDecimal(numerator: number, denominator: number): string {
    if(numerator === 0) return '0';

    let res: string[] = [];
    const existedRemainers = new Map<number, number>();
    
    const isNegative = (numerator > 0) !== (denominator > 0);
    if(isNegative) res.push('-');

    let dividend = Math.abs(numerator);
    const divisor = Math.abs(denominator);

    res.push(Math.floor(dividend / divisor).toString());

    dividend = dividend % divisor;
    if(dividend === 0) return res.join("");

    res.push(".");
    while(dividend !== 0) {
        existedRemainers.set(dividend, res.length);

        dividend *= 10;
        res.push(Math.floor(dividend / divisor).toString());
        dividend %= divisor;

        if(existedRemainers.has(dividend)) {
            const index: number = existedRemainers.get(dividend) || 0;
            res.splice(index, 0, '(');
            res.push(')');
            break;
        }
    }

    return res.join("");
}