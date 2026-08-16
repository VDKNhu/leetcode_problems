function stoneGameIX(stones: number[]): boolean {
    const countByModeThree: number[] = new Array(3).fill(0);
    for(const stone of stones) {
        countByModeThree[stone % 3]++;
    }
    const alternativeCount: number[] = [
        countByModeThree[0],
        countByModeThree[2],
        countByModeThree[1]
    ]

    const checkWinCondition = (stoneCount: number[]): boolean => {
        stoneCount[1]--;
        if(stoneCount[1] < 0) {
            return false;
        }
        let totalRounds = 1 + Math.min(stoneCount[1], stoneCount[2]) * 2 + stoneCount[0];
        if(stoneCount[1] > stoneCount[2]) {
            stoneCount[1]--;
            totalRounds++;
        }
        return totalRounds % 2 === 1 && stoneCount[1] !== stoneCount[2];
    }
    return checkWinCondition([...countByModeThree]) || checkWinCondition([...alternativeCount]);
};