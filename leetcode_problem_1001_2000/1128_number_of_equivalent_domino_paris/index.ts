type Domino = [number, number];

function numEquivDominoPairs(dominoes: Domino[]): number {
    let dominoesMap: number[] = new Array(100).fill(0);
    let result = 0;

    for(let dom of dominoes) {
        const value = dom[0] < dom[1] ? 10 * dom[0] + dom[1] : 10 * dom[1] + dom[0];

        result += dominoesMap[value];
        dominoesMap[value]++; 
    }

    return result;
};

