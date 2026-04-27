class Pair {
    key: number;
    value: string;
    constructor(key: number, value: string) {
        this.key = key;
        this.value = value;
    }
}

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]) {
        const n = pairs.length;
        const res = [];

        for(let i = 0; i < n; i++) {
            let j = i - 1;
            while(j >= 0 && pairs[j].key > pairs[j + 1].key) {
                [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
                j--;
            }
            res.push([...pairs]);
        }
        return res;
    }
}
