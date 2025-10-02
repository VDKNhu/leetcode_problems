function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    return numBottles + calc(0, numBottles , numExchange);
};

function calc(fullBottles: number, emptyBottles: number, numExchange: number): number {
    if(fullBottles === 0 && emptyBottles < numExchange) {
        return 0;
    }

    if(emptyBottles >= numExchange) {
        return calc(fullBottles + 1, emptyBottles - numExchange, numExchange + 1);
    }

    return fullBottles + calc(0, fullBottles + emptyBottles, numExchange);
}