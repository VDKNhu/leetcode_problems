function addBinary(a: string, b: string): string {
    const aBinary = BigInt('0b' + a);
    const bBinary = BigInt('0b' + b);
    return (aBinary + bBinary).toString(2);
};