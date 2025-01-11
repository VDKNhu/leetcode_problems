function canConstruct(s: string, k: number): boolean {
  if (s.length < k) {
    return false;
  }

  let frequency: number[] = new Array(26).fill(0);
  for (const char of s) {
    frequency[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  const oddTotal = frequency.reduce(
    (acc: number, cur: number) => (cur % 2 === 1 ? acc + 1 : acc),
    0
  );

  return oddTotal <= k;
}
