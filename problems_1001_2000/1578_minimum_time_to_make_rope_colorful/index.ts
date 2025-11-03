function minCost(colors: string, neededTime: number[]): number {
    let i = 0, res = 0;

    for(let j = 1; j < colors.length; j++) {
        if(colors[j] === colors[i]) {
            if(neededTime[i] < neededTime[j]) {
                res += neededTime[i]
                i = j;
            } else {
                res += neededTime[j];
            }
        } else {
            i = j;
        }
    }

    return res;
};