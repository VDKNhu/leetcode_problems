function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((p1: number, p2: number) => p1 - p2);
    const n = spells.length, m = potions.length;
    const result: number[] = [];

    for(const s of spells) {
        let left = 0, right = m;
        while(left < right) {
            const mid = (left + right) >> 1;
            if(potions[mid] * s < success) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.push(m - left);
    }
    return result;
}