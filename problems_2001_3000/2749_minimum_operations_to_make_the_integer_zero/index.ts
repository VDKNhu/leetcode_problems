function makeTheIntegerZero(num1: number, num2: number): number {
    for(let operations = 1; ; operations++) {
        const remaining = num1 - num2 * operations;

        if(remaining < 0) break;

        const minOperations = remaining.toString(2).replace(/0/g, '').length;
        if(minOperations <= operations && operations <= remaining) {
            return operations;
        }
    }

    return -1;
};