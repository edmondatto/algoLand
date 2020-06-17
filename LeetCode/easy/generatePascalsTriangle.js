/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generatePascalsTriangle(numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  let solution = [[1], [1, 1]]

  for (let i = 2; i < numRows; i++) {
    solution.push(getSums(solution[i - 1]))
  }
  return solution
}

function getSums(arr) {
  const solution = [1]
  for (let i = 0; i < arr.length - 1; i++) {
    solution.push(arr[i] + arr[i + 1])
  }
  solution.push(1)
  return solution
}