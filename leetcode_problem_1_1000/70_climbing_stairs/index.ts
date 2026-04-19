// Dynamic Programming Approach
function climbStairs(n: number): number {
    let prevStep = 1, curStep = 1;
    for(let i = 1; i < n; i++) {
        [prevStep, curStep] = [curStep, prevStep + curStep];
    }

    return curStep;
};

// Recursive with Memoization Approach
function climbStairsV2(n: number): number {
    const memo: Map<number, number> = new Map([[1, 1], [2, 2]]);
    if(memo.has(n)) {
        return memo.get(n)!;
    } else {
        const ways = climbStairsV2(n - 1) + climbStairsV2(n - 2);
        memo.set(n, ways);
        return ways;
    }
}