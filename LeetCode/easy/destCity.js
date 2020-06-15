/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  let start = paths[0][1]
  const cityPairs = buildGraph(paths)

  return traverse(cityPairs, start)
}

function destCity2(paths) {
  let currentDestination = paths[0][1]
  const cityPairs = buildGraph(paths)

  for (let path of paths) {
    if (cityPairs[currentDestination]) {
      currentDestination = cityPairs[currentDestination]
    }
  }

  return currentDestination
}

function buildGraph (paths) {
  const graph = {}
  for (let path of paths) {
    graph[path[0]] = path[1]
  }
  return graph
}

function traverse(graph, start) {
  let current = start

  if (graph[current]) {
    current = graph[current]
    return traverse(graph, current)
  }
  return current
}