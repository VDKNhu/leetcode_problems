function countPrefixSuffixPairs(words: string[]): number {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      result += isPrefixAndSuffix(words[i], words[j]) ? 1 : 0;
    }
  }
  return result;
}

function isPrefixAndSuffix(str1: string, str2: string): boolean {
  const preStr2 = str2.slice(0, str1.length);
  const sufStr2 = str2.slice(str2.length - str1.length);
  return str1 === preStr2 && str1 === sufStr2;
}
