function gridGame(grid: number[][]): number {
  let pointsI = grid[0]
    .slice(0, grid[0].length)
    .reduce((acc: number, cur: number) => acc + cur, 0);
  let pointsII = 0;
  let result = Infinity;

  for (let downIndexI = 0; downIndexI < grid[0].length; downIndexI++) {
    pointsI = pointsI - grid[0][downIndexI];
    result = Math.min(result, Math.max(pointsI, pointsII));
    pointsII = pointsII + grid[1][downIndexI];
  }

  return result;
}
