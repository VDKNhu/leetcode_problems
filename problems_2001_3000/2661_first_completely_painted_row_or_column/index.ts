function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const rows = mat[0].length;
  const cols = mat.length;

  const mapColArr = new Array(cols).fill(rows);
  const mapRowArr = new Array(rows).fill(cols);

  let mapMat = new Array(rows * cols);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      mapMat[mat[i][j] - 1] = [i, j];
    }
  }

  const mapArr = [...mapColArr, ...mapRowArr];
  for (let i = 0; i < arr.length; i++) {
    const coor = mapMat[arr[i] - 1];
    if (mapArr[coor[0]] - 1 === 0 || mapArr[cols + coor[1]] - 1 === 0) {
      return i;
    }
    mapArr[coor[0]] = mapArr[coor[0]] - 1;
    mapArr[cols + coor[1]] = mapArr[cols + coor[1]] - 1;
  }

  return -1;
}
