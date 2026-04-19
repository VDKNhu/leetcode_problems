function canBeValid(s: string, locked: string): boolean {
  const len = s.length;
  if (len % 2 === 1) {
    return false;
  }

  let openBrackets = 0;
  for (let i = 0; i < len; i++) {
    if (s.charAt(i) === "(" || Number(locked[i]) === 0) {
      openBrackets++;
    } else if (openBrackets > 0) {
      openBrackets--;
    } else {
      return false;
    }
  }

  let closeBrackets = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (s.charAt(i) === ")" || Number(locked[i]) === 0) {
      closeBrackets++;
    } else if (closeBrackets > 0) {
      closeBrackets--;
    } else {
      return false;
    }
  }

  return true;
}
