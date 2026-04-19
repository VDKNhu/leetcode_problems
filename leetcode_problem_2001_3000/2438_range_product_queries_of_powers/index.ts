function productQueries(n: number, queries: number[][]): number[] {
  const powers: number[] = [];
  const MOD = Math.pow(10, 9) + 7;

  while(n > 0) {
    const maxPower = findMaxPower(n);
    const value = Math.pow(2, maxPower);
    powers.unshift(value % MOD);
    n = n - value;
  }

  const dp: number[][] = Array.from({length: powers.length}, () => new Array(powers.length).fill(0));
  let res: number[] = [];

  for(const query of queries) {
    if(query[0] === query[1]) {
        res.push(powers[query[0]]);
        continue;
    }

    if(dp[query[0]][query[1]]) {
        res.push(dp[query[0]][query[1]]);
        continue;
    }

    let left = query[1] - 1;
    let right = query[1];
    let value = powers[right];
    
    while(left >= query[0]) {
        value *= powers[left];

        if(!dp[left][right]) { 
            dp[left][right] = value % MOD;
        }

        left--;
    }
    res.push(value % MOD);
  }

  return res;
};

function findMaxPower(n: number): number {
    let res = 0;
    while(n > 1) {
        res += 1;
        n = Math.floor(n / 2);
    }

    return res;
}