function eventualSafeNodes(graph: number[][]): number[] {
  const length = graph.length;
  const nodeTypes: number[] = new Array(length).fill(0); // 0: not visited, 1: visiting, 2: safe node
  let result: number[] = [];

  function dfs(nodeIndex: number): boolean {
    if (nodeTypes[nodeIndex]) {
      return nodeTypes[nodeIndex] === 2;
    }

    nodeTypes[nodeIndex] = 1;
    for (let neighbor of graph[nodeIndex]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    nodeTypes[nodeIndex] = 2;
    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      result.push(i);
    }
  }

  return result;
}
