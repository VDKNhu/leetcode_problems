function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if(digits[i] < 10) return digits;

        digits[i] = digits[i] % 10;
    }

    return [1, ...digits];
};