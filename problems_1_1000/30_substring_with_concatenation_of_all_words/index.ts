function findSubstring(s: string, words: string[]): number[] {
  if (s.length === 0 || words?.[0]?.length === 0) {
    return [];
  }

  let hashMap = {};
  let result: number[] = [];
  const wordCount = words.length;
  const wordLength = words[0].length;

  for (let i = 0; i < words.length; i++) {
    if (!(words[i] in hashMap)) {
      hashMap[words[i]] = 0;
    }
    hashMap[words[i]]++;
  }

  for (let i = 0; i < s.length - wordCount * wordLength + 1; i++) {
    const wordSeen = {};

    for (let j = 0; j < wordCount; j++) {
      const curIndex = i + j * wordLength;
      const curStr = s.slice(curIndex, curIndex + wordLength);

      if (!(curStr in hashMap)) {
        break;
      }

      if (!(curStr in wordSeen)) {
        wordSeen[curStr] = 0;
      }
      wordSeen[curStr]++;

      if (wordSeen[curStr] > (hashMap[curStr] || 0)) {
        break;
      }

      if (j + 1 === wordCount) {
        result.push(i);
      }
    }
  }

  return result;
}
