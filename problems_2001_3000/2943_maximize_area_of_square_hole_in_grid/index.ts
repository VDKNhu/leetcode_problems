function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    function findMaxConsecutiveGap(bars: number[]): number {
        bars.sort((b1: number, b2: number) => b1 - b2);
        let maxGap = 1, currentGap = 1;
        
        for(let i = 1; i < bars.length; i++) {
            if(bars[i] === bars[i - 1] + 1) {
                currentGap++;
                maxGap = Math.max(maxGap, currentGap);
            } else {
                currentGap = 1;
            }
        }

        return maxGap + 1;
    }

    const hMaxConsecutiveGap = findMaxConsecutiveGap(hBars);
    const vMaxConsecutiveGap = findMaxConsecutiveGap(vBars);

    return Math.min(hMaxConsecutiveGap, vMaxConsecutiveGap) ** 2;
};