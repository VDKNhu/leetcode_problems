function findMaxFish(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;
  const directions = [-1, 0, 1, 0, -1];

  function dfs(r: number, c: number): number {
    let count = grid[r][c];
    grid[r][c] = 0;

    for (let i = 0; i < 4; i++) {
      const nextRow = r + directions[i];
      const nextCol = c + directions[i + 1];

      if (
        nextRow >= 0 &&
        nextRow < rows &&
        nextCol >= 0 &&
        nextCol < cols &&
        grid[nextRow][nextCol] > 0
      ) {
        count += dfs(nextRow, nextCol);
      }
    }
    return count;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] > 0) {
        result = Math.max(result, dfs(i, j));
      }
    }
  }

  return result;
}
