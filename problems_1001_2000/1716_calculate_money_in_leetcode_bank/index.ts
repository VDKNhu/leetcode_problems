function totalMoney(n: number): number {
    const weekNum = Math.floor(n / 7);
    const remaining = n % 7;
    return weekNum > 0 ? 
        28 * weekNum + 7 * ((weekNum - 1) * weekNum / 2) + weekNum * remaining + remaining * (remaining + 1) / 2 
        : remaining * (remaining + 1) / 2;
};