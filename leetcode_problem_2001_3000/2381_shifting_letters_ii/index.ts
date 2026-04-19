function shiftingLetters(s: string, shifts: number[][]): string {
  const charArr = s.split("");
  const deltaArr = new Array(charArr.length + 1).fill(0);
  const aIndex = "a".charCodeAt(0);
  const zIndex = "z".charCodeAt(0);

  for (let i = 0; i < shifts.length; i++) {
    const startIndex = shifts[i][0];
    const endIndex = shifts[i][1];
    const direction = shifts[i][2] === 0 ? -1 : 1;

    deltaArr[startIndex] += direction;
    deltaArr[endIndex + 1] -= direction;
  }

  for (let i = 1; i < charArr.length; i++) {
    deltaArr[i] += deltaArr[i - 1];
  }

  for (let i = 0; i < charArr.length; i++) {
    let charIndex =
      charArr[i].charCodeAt(0) + (deltaArr[i] % (zIndex - aIndex + 1));

    if (charIndex < aIndex) {
      charIndex = zIndex - (aIndex - charIndex) + 1;
    } else if (charIndex > zIndex) {
      charIndex = aIndex + (charIndex - zIndex) - 1;
    }

    charArr[i] = String.fromCharCode(charIndex);
  }

  return charArr.join("");
}
