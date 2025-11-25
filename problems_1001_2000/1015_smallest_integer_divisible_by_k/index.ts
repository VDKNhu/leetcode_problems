// Pigeonhole Principle
// There are only k possible remainders (0 through k-1). 
// If we haven't found a 0 remainder after k iterations, 
// we'll start seeing repeated remainders, meaning we're in a cycle that doesn't include 0, 
// so no repunit will ever be divisible by k.

function smallestRepunitDivByK(k: number): number {
    if(k % 2 === 0 || k % 5 === 0) return -1;

    let remainder = 0;
    for(let len = 1; len <= k; len++) {
        remainder = (remainder * 10 + 1) % k;
        if(remainder === 0) return len;
    }

    return -1;
};