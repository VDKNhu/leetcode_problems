const MOD: number = 1e9 + 7;

function numTilings(n: number): number {
    // An array to hold the number of ways to tile for different subproblems:
    // - tilingWays[0]: full cover,
    // - tilingWays[1]: top row is missing one,
    // - tilingWays[2]: bottom row is missing one,
    // - tilingWays[3]: both top and bottom are missing one (in L-shape).
    let tilingWays: number[] = [1, 0, 0, 0];

    for (let i = 1; i <= n; ++i) {
        let newTilingWays: number[] = [0, 0, 0, 0];

        newTilingWays[0] = (tilingWays[0] + tilingWays[1] + tilingWays[2] + tilingWays[3]) % MOD;
        newTilingWays[1] = (tilingWays[2] + tilingWays[3]) % MOD;
        newTilingWays[2] = (tilingWays[1] + tilingWays[3]) % MOD;
        newTilingWays[3] = tilingWays[0];

        tilingWays = [...newTilingWays];
    }

    return tilingWays[0];
}
