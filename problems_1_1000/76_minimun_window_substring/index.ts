function minWindow(s: string, t: string): string {
  let hashmap = {};
  let startIndex = 0;
  let minStrStart = 0;
  let minLength = s.length + 1;
  let numMap = 0;

  for (let i = 0; i < t.length; i++) {
    const curChar = t[i];
    if (!(curChar in hashmap)) {
      hashmap[curChar] = 0;
    }
    hashmap[curChar]++;
  }

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const curChar = s[endIndex];
    if (curChar in hashmap) {
      hashmap[curChar]--;
      if (hashmap[curChar] >= 0) {
        numMap++;
      }
    }

    while (numMap === t.length) {
      if (minLength > endIndex - startIndex + 1) {
        minStrStart = startIndex;
        minLength = endIndex - startIndex + 1;
      }

      const startChar = s[startIndex];
      startIndex++;
      if (startChar in hashmap) {
        if (hashmap[startChar] === 0) {
          numMap--;
        }
        hashmap[startChar]++;
      }
    }
  }

  return minLength > s.length
    ? ""
    : s.slice(minStrStart, minStrStart + minLength);
}
