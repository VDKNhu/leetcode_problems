function maxDifference(s: string): number {
  let maxOddFreq = 0;
  let minEvenFreq = Infinity;
  const mapFreq: number[] = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let char of s) {
    mapFreq[char.charCodeAt(0) - aCode]++;
  }

  for (let i = 0; i < 26; i++) {
    if (mapFreq[i] === 0) {
      continue;
    } else if (mapFreq[i] % 2 === 0 && mapFreq[i] < minEvenFreq) {
      minEvenFreq = mapFreq[i];
    } else if (mapFreq[i] % 2 !== 0 && mapFreq[i] > maxOddFreq) {
      maxOddFreq = mapFreq[i];
    }
  }

  return maxOddFreq - minEvenFreq;
}
