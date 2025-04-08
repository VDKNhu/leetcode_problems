function minimumOperations(nums: number[]): number {
  let result = 0;

  while (nums?.length > 0) {
    const mapArr = normalizeArray(nums);

    if (!Object.values(mapArr)?.find((value: number) => value > 1)) {
      break;
    }

    if (Object.values(mapArr)?.find((value: number) => value > 1)) {
      nums = nums.splice(3);
      result++;
    }
  }

  return result;
}

function normalizeArray(nums: number[]): Record<number, number> {
  return nums.reduce((acc: Record<number, number>, cur: number) => {
    acc[cur] = acc[cur] || 0;
    acc[cur] = acc[cur] + 1;
    return acc;
  }, {});
}
