class Solution0301 {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]) {
        const scores: number[] = [];
        for(let i = 0; i < operations.length; i++) {
            if(operations[i] === "+") {
                const nextVal = (+scores[scores.length - 1] || 0) + (+scores[scores.length - 2] || 0);
                scores.push(nextVal);
                continue;
            }

            if(operations[i] === "C") {
                scores.pop();
                continue;
            }

            if(operations[i] === "D") {
                scores.push(2 * scores[scores.length - 1]);   
                continue;
            }

            scores.push(+operations[i]);
        }

        return scores.reduce((acc, cur) => acc + cur, 0);
    }
}
