function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const parentArr: number[] = Array.from({ length: 26 }, (_, i) => i);
    let result: string = '';

    function findParentIndex(index: number): number {
        if (index !== parentArr[index]) {
            parentArr[index] = findParentIndex(parentArr[index]);
        }

        return parentArr[index];
    }

    function normalizeParent(index1: number, index2: number): void {
        const parentIndex1 = findParentIndex(index1);
        const parentIndex2 = findParentIndex(index2);

        if (parentIndex1 < parentIndex2) {
            parentArr[parentIndex2] = parentIndex1;
        } else {
            parentArr[parentIndex1] = parentIndex2;
        }
    }

    for (let i = 0; i < s1.length; i++) {
        const index1 = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const index2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        normalizeParent(index1, index2)
    }

    for(let i = 0; i < baseStr.length; i++) {
        const parentIndex = findParentIndex(baseStr[i].charCodeAt(0) - 'a'.charCodeAt(0));
        result += String.fromCharCode(parentIndex + 'a'.charCodeAt(0));
    }

    return result;
};
