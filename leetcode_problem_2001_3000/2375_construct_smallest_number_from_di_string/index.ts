function smallestNumber(pattern: string): string {
  const len = pattern.length;
  const result = new Array(len + 1).fill("");
  const visited = new Array(len + 1).fill(false);

  function dfs(index: number, num: number) {
    if (index === len) {
      return;
    }

    if (visited[num]) {
      visited[num] = false;
      if (pattern[index] === "I") {
        dfs(index - 1, num - 1);
      } else {
        dfs(index - 1, num + 1);
      }
      return;
    }

    visited[num] = true;
    result[index] = num;
    if (pattern[index] === "I") {
      for (let i = result[index] + 1; i <= len + 1; i++) {
        if (!visited[i]) {
          dfs(index + 1, i);
          return;
        }
      }

      visited[num] = false;
      dfs(index, num - 1);
    } else {
      for (let i = result[index] - 1; i > 0; i--) {
        if (!visited[i]) {
          dfs(index + 1, i);
          return;
        }
      }

      visited[num] = false;
      dfs(index, num + 1);
    }
  }

  dfs(0, 1);
  for (let i = 1; i <= len + 1; i++) {
    if (!visited[i]) {
      result[len] = i;
      break;
    }
  }

  return result.join("");
}
