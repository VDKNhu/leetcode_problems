function maxProfit(prices: number[], strategy: number[], k: number): number {
    const len = prices.length;
    let max = 0, cur = 0, sum = 0;

    for(let i = 0; i < len; i++) {
        sum += prices[i] * strategy[i];
        if(i < k) {
            if(i < k / 2) {
                max = max - prices[i] * strategy[i];
            } else {
                max = max + prices[i] * (1 - strategy[i]);
            }
            cur = max;
            continue;
        }

        cur = cur + prices[i - k] * strategy[i - k] - prices[i - k / 2] + prices[i] * (1 - strategy[i]);
        max = Math.max(max, cur);
    }

    if(max < 0) {
        return sum;
    }

    return max + sum;
}
