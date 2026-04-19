function getNoZeroIntegers(n: number): number[] {
    for(let i = 1; i < n; i++) {
        if(!checkNoZero(i) && !checkNoZero(n - i)) {
            return [i, n - i];
        }
    }
    
    return []
};

function checkNoZero(n: number): boolean {
    return n.toString().split("").includes("0");
}