function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let result: number[] = [];
  let uniqueItems = new Set();

  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      if (A[i] === B[i]) {
        result.push(1);
      } else {
        result.push(0);
      }
      continue;
    }

    let count: number = result[i - 1];
    if (
      !uniqueItems.has(A[i]) &&
      B.slice(0, i + 1).find((v: number) => v === A[i])
    ) {
      count += 1;
      uniqueItems.add(A[i]);
    }
    if (
      !uniqueItems.has(B[i]) &&
      A.slice(0, i + 1).find((v: number) => v === B[i])
    ) {
      count += 1;
      uniqueItems.add(B[i]);
    }
    result.push(count);
  }

  return result;
}
