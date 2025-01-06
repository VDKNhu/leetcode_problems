function minOperations(boxes: string): number[] {
  const boxNums: number[] = boxes.split("").map((s: string) => Number(s));
  const travelIndexes: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < boxNums.length; i++) {
    if (boxNums[i]) {
      travelIndexes.push(i);
    }
  }

  for (let i = 0; i < boxNums.length; i++) {
    let steps = 0;
    for (let j = 0; j < travelIndexes.length; j++) {
      if (travelIndexes[j] !== i) {
        steps += Math.abs(travelIndexes[j] - i);
      }
    }
    result.push(steps);
  }

  return result;
}
