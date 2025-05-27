function differenceOfSums(n: number, m: number): number {
  let sumDivisibleM = 0;
  let sumNotDivisibleM = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      sumDivisibleM += i;
    } else {
      sumNotDivisibleM += i;
    }
  }

  return sumNotDivisibleM - sumDivisibleM;
}
