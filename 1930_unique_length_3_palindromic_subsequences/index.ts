function countPalindromicSubsequence(s: string): number {
  const charArr: string[] = s.split("");
  let visitedArr: string[] = [];
  let result: number = 0;

  for (let i = 0; i < charArr.length - 2; i++) {
    if (visitedArr.find((v: string) => v === charArr[i])) {
      continue;
    }

    visitedArr.push(charArr[i]);
    let lastIndex = i;

    for (let j = charArr.length - 1; j >= i; j--) {
      if (charArr[j] === charArr[i]) {
        lastIndex = j;
        break;
      }
    }

    if (i < lastIndex) {
      const midArr = new Set(charArr.slice(i + 1, lastIndex));
      result += Array.from(midArr).length;
    }
  }

  return result;
}
