function minOperations(nums: number[]): number {
  const stack: number[] = [];
  let res = 0;

  for(const num of nums) {
    if(num === 0) {
        stack.length = 0;
        continue;
    }

    while(stack.length > 0 && stack[stack.length - 1] > num) stack.pop();

    if(stack.length > 0 && stack[stack.length - 1] === num) continue;

    stack.push(num);
    res++;
  }

  return res;
}
