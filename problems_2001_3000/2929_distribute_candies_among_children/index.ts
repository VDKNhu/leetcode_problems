function distributeCandies(n: number, limit: number): number {
    // The solution based on the principle from combinatorial mathematics and the principle of inclusion-exclusion
    if (n > limit * 3) {
        return 0;
    }

    const limitPlusOne = limit + 1;
    const totalCombinations = calCombinationsOfTwo(n);
    const oneChildExceedLimit = calCombinationsOfTwo(n - limitPlusOne);
    const twoChildExceedLimit = calCombinationsOfTwo(n - 2 * limitPlusOne);

    return totalCombinations - 3 * oneChildExceedLimit + 3 * twoChildExceedLimit;

    function calCombinationsOfTwo(value: number): number {
        if (value < 0) {
            return 0;
        }

        return (value + 2) * (value + 1) / 2;
    }
};