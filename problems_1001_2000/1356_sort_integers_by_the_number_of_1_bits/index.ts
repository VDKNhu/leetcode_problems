function sortByBits(arr: number[]): number[] {
    return arr.sort(((el1: number, el2: number) => {
        const oneCount1 = countOnes(el1);
        const oneCount2 = countOnes(el2);
        return oneCount1 - oneCount2 || el1 - el2;
    }))
};

function countOnes(num: number): number {
    let count = 0;
    while(num) {
        num = num & (num - 1);
        count++;
    }
    return count;
}