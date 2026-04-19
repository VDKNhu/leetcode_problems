function highestPeak(isWater: number[][]): number[][] {
  const rows = isWater.length;
  const cols = isWater[0].length;
  let result: number[][] = new Array(rows);
  let queue: number[][] = [];
  let directions = [-1, 0, 1, 0, -1];

  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(-1);
    for (let j = 0; j < cols; j++) {
      if (isWater[i][j] === 1) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const tempQueue: number[][] = [];
    for (let i = 0; i < queue.length; i++) {
      const [row, col] = queue[i];
      for (let j = 0; j < 4; j++) {
        const nextRow = row + directions[j];
        const nextCol = col + directions[j + 1];

        if (
          nextRow >= 0 &&
          nextRow < rows &&
          nextCol >= 0 &&
          nextCol < cols &&
          result[nextRow][nextCol] === -1
        ) {
          result[nextRow][nextCol] = result[row][col] + 1;
          tempQueue.push([nextRow, nextCol]);
        }
      }
    }
    queue = tempQueue;
  }

  return result;
}
