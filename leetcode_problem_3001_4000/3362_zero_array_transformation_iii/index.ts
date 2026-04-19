function maxRemoval(nums: number[], queries: number[][]): number {
  queries.sort((q1: number[], q2: number[]) => q1[0] - q2[0]);

  const nLen = nums.length;
  const qLen = queries.length;
  const difArray = new Array(nLen + 1).fill(0);

  let pq = new MaxPriorityQueue<number>();
  let [curSum, qIndex] = [0, 0];

  for (let i = 0; i < nLen; i++) {
    curSum += difArray[i];

    while (qIndex < qLen && queries[qIndex][0] <= i) {
      pq.enqueue(queries[qIndex][1]);
      qIndex++;
    }

    while (curSum < nums[i] && !pq.isEmpty() && pq.front() >= i) {
      curSum++;
      difArray[pq.dequeue() + 1]--;
    }

    if (curSum < nums[i]) {
      return -1;
    }
  }

  return pq.size();
}
