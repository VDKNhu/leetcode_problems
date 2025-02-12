function maximumSum(nums: number[]): number {
  let mapArr: number[][] = [];
  for (let num of nums) {
    const sumDigit = sumDitgits(num);

    if (!mapArr[sumDigit] || mapArr[sumDigit]?.length < 2) {
      mapArr[sumDigit] = [...(mapArr[sumDigit] || []), num];
      continue;
    }

    let els = [...mapArr[sumDigit], num];
    const min = Math.min(...els);
    for (let i = 0; i < els.length; i++) {
      if (els[i] === min) {
        els.splice(i, 1);
        break;
      }
    }
    mapArr[sumDigit] = els;
  }

  let sumArr = mapArr.map((el: number[]) => {
    if (!el || el?.length < 2) {
      return 0;
    }
    return el[0] + el[1];
  });

  sumArr = sumArr?.filter((el: number) => !!el);

  const result = Math.max(...sumArr);

  return result <= 0 ? -1 : result;
}

function sumDitgits(num: number): number {
  const next = Math.floor(num / 10);
  const cur = num % 10;
  return next ? cur + sumDitgits(next) : cur;
}
