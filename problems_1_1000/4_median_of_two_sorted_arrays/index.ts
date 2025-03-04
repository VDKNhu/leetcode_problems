function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const medianIndex =
    (len1 + len2) % 2 === 0
      ? (len1 + len2) / 2
      : Math.ceil((len1 + len2) / 2) - 1;

  let startIndex1 = 0,
    startIndex2 = 0;
  let remainingLen = medianIndex + 1;
  let result: number[] = [];

  while (remainingLen > 0 && startIndex1 < len1 && startIndex2 < len2) {
    const smallerEl = Math.min(nums1[startIndex1], nums2[startIndex2]);
    if (result.length < 2) {
      result.push(smallerEl);
    } else {
      result = [result[1], smallerEl];
    }

    if (nums1[startIndex1] < nums2[startIndex2]) {
      startIndex1++;
    } else {
      startIndex2++;
    }
    remainingLen--;
  }

  while (remainingLen > 0 && startIndex1 >= len1) {
    if (result.length < 2) {
      result.push(nums2[startIndex2]);
    } else {
      result = [result[1], nums2[startIndex2]];
    }

    startIndex2++;
    remainingLen--;
  }

  while (remainingLen > 0 && startIndex2 >= len2) {
    if (result.length < 2) {
      result.push(nums1[startIndex1]);
    } else {
      result = [result[1], nums1[startIndex1]];
    }

    startIndex1++;
    remainingLen--;
  }

  return (len1 + len2) % 2 === 1
    ? Math.max(...result)
    : (result[0] + result[1]) / 2;
}
