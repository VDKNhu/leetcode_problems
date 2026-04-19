function numWaterBottles(numBottles: number, numExchange: number): number {
    if(numBottles < numExchange) {
        return numBottles;
    }

    const exchangedBottles = Math.floor(numBottles / numExchange);
    const remainingBottles = numBottles - exchangedBottles * numExchange;
    return exchangedBottles * numExchange + numWaterBottles(remainingBottles + exchangedBottles, numExchange);
};