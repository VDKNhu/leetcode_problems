function prefixCount(words: string[], pref: string): number {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      result++;
    }
  }

  return result;
}
