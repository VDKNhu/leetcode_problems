function wordSubsets(words1: string[], words2: string[]): string[] {
  let result: string[] = [...words1];
  let mapArr = {};

  for (let i = 0; i < words2.length; i++) {
    for (let j = 0; j < words2[i].length; j++) {
      const count = words2[i].split("").reduce((acc: number, s: string) => {
        if (s === words2[i][j]) {
          return acc + 1;
        }
        return acc;
      }, 0);
      if (!mapArr[words2[i][j]] || mapArr[words2[i][j]] < count) {
        mapArr[words2[i][j]] = count;
      }
    }
  }

  for (let i = 0; i < words1.length; i++) {
    const mapArrKeys = Object.keys(mapArr);
    for (let j = 0; j < mapArrKeys.length; j++) {
      if (words1[i].split(mapArrKeys[j]).length - 1 < mapArr[mapArrKeys[j]]) {
        result = result.filter((s: string) => s !== words1[i]);
        break;
      }
    }
  }
  return result;
}
