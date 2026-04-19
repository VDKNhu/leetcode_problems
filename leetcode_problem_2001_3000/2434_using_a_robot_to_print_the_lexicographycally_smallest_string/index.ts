function robotWithString(s: string): string {
  const aCode: number = "a".charCodeAt(0);
  const freq: number[] = new Array(26).fill(0);
  const charStack: string[] = [];

  let result: string = "";
  let minIndex: number = 0;

  for (let char of s) {
    freq[char.charCodeAt(0) - aCode]++;
  }

  for (let char of s) {
    freq[char.charCodeAt(0) - aCode]--;
    charStack.push(char);

    while (minIndex < 26 && freq[minIndex] === 0) {
      minIndex++;
    }

    while (
      charStack.length > 0 &&
      charStack[charStack.length - 1].charCodeAt(0) - aCode <= minIndex
    ) {
      result += charStack.pop();
    }
  }

  return result;
}
