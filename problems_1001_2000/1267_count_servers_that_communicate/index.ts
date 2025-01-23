function countServers(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;

  const rowCount = new Array(rows).fill(0);
  const colCount = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        rowCount[i] += 1;
        colCount[j] += 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
        result++;
      }
    }
  }

  return result;
}
