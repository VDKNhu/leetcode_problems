function bestClosingTime(customers: string): number {
    let res = 0, minCost = Number.MAX_SAFE_INTEGER;
    const len = customers.length;
    const prefixSums = new Array(len + 1).fill(0);

    for(let i = 0; i < len; i++) {
        prefixSums[i + 1] = prefixSums[i] + (customers[i] === "Y" ? 1 : 0);
    }

    for(let closingHour = 0; closingHour <= len; closingHour++) {
        const noCustomerPenalty = closingHour - prefixSums[closingHour];
        const customerPenalty = prefixSums[len] - prefixSums[closingHour];
        const cost = noCustomerPenalty + customerPenalty;
        
        if(cost < minCost) {
            res = closingHour;
            minCost = cost;
        }
    }

    return res;
};