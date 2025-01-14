const vowelStrings = (words: string[], queries: number[][]): number[] => {
  const vowels = new Set(["a", "e", "u", "o", "i"]);
  let mapArr = new Array(words.length + 1).fill(0);

  words.forEach((word: string, index: number) => {
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
      mapArr[index + 1] = mapArr[index] + 1;
    } else {
      mapArr[index + 1] = mapArr[index];
    }
  });

  return queries.map(
    (query: number[]) => mapArr[query[1] + 1] - mapArr[query[0]]
  );
};
