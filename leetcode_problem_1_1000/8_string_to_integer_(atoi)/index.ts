function myAtoi(s: string): number {
  const bound = Math.pow(2, 31);
  let result = 0;
  let isPositive = true;
  let i = 0;

  let chars = s.trim();

  if (chars[i] === "-") {
    isPositive = false;
    i++;
  } else if (chars[i] === "+") {
    i++;
  }

  for (let j = i; j < chars.length; j++) {
    const currentValue = chars.charCodeAt(j) - "0".charCodeAt(0);

    if (currentValue < 0 || currentValue > 9) {
      break;
    }

    if (
      result > Math.floor((bound - 1) / 10) ||
      result > Math.floor((bound - currentValue - 1) / 10)
    ) {
      return isPositive ? bound - 1 : -bound;
    }

    result = result * 10 + currentValue;
  }

  return isPositive ? result : -result;
}
