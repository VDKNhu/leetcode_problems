function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  let mapPathArr = Array.from({ length: numCourses }, () =>
    new Array(numCourses).fill(false)
  );
  let pathToArr: number[][] = Array.from({ length: numCourses }, () => []);
  let countToArr: number[] = new Array(numCourses).fill(0);
  let queue: number[] = [];

  for (let [from, to] of prerequisites) {
    pathToArr[from].push(to);
    ++countToArr[to];
  }

  for (let i = 0; i < numCourses; i++) {
    if (countToArr[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currentCourse = queue.shift() as number;

    for (let nextCourse of pathToArr[currentCourse]) {
      mapPathArr[currentCourse][nextCourse] = true;

      for (let i = 0; i < numCourses; i++) {
        mapPathArr[i][nextCourse] ||= mapPathArr[i][currentCourse];
      }

      if (--countToArr[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return queries.map(([from, to]) => mapPathArr[from][to]);
}
