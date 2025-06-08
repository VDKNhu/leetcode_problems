function lexicalOrderV1(n: number): number[] {
  const arr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    arr[i] = (i + 1).toString();
  }
  return arr.sort().map((str: string) => Number(str));
}

function lexicalOrderV2(n: number): number[] {
  const result: number[] = [];

  function dfs(value: number) {
    result.push(value);
    for (let i = 0; i < 10; i++) {
      const nextValue = value * 10 + i;
      if (nextValue > n) break;
      dfs(nextValue);
    }
  }

  for (let i = 1; i < 10; i++) {
    if (i > n) break;
    dfs(i);
  }

  return result;
}
