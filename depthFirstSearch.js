const visited = new Map()

/**
 * Uses DFS to traverse a given graph & starting node
 * @param {object | *[]} graph - The graph to be traversed
 * @param {number | string} startNode - The starting point for traversal
 * @return void
 */
function dfs(graph, startNode) {
  if (visited.has(startNode)) return
  visited.set(startNode, true)

  const neighbors = graph[startNode]
  for (let neighbor of neighbors) {
    dfs(graph, neighbor)
  }
}