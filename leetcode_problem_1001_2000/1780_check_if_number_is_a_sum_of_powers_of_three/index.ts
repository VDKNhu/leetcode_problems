function checkPowersOfThree(n: number): boolean {
  if (n === 1) {
    return true;
  }

  const aCase = (n - 1) % 3 === 0;
  const bCase = n % 3 === 0;
  if (aCase || bCase) {
    return checkPowersOfThree(aCase ? (n - 1) / 3 : n / 3);
  } else {
    return false;
  }
}
