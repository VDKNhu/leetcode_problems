function minimumLength(s: string): number {
  const mapArr = s.split("").reduce((acc: number[], cur: string) => {
    acc[cur.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    return acc;
  }, new Array(26).fill(0));

  let operations = 0;
  for (let i = 0; i < mapArr.length; i++) {
    if (mapArr[i] > 2) {
      operations += Math.floor((mapArr[i] - 1) / 2);
    }
  }

  return s.length - operations * 2;
}
