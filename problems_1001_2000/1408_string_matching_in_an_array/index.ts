function stringMatching(words: string[]): string[] {
  let n = words.length;
  let ans = new Set<string>();

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      let w1 = words[i],
        w2 = words[j];
      if (w1.indexOf(w2) !== -1) ans.add(w2);
      else if (w2.indexOf(w1) !== -1) ans.add(w1);
    }

  return [...ans];
}
