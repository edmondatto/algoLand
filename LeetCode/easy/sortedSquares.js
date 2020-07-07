/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  let result = []
  let i = 0, j = A.length - 1
  let memo = new Map()

  while (i <= j) {
    const v1 = Math.abs(A[i])
    const v2 = Math.abs(A[j])
    if (v1  < v2) {
      result.push(computeOrFetch(v2, memo))
      j--
    } else if (v1  > v2) {
      result.push(computeOrFetch(v1, memo))
      i++
    } else {
      const sqVal = A[i] * A[i]
      i !== j ? result.push(sqVal, sqVal) : result.push(sqVal)
      i++
      j--
    }
  }
  return result.reverse()
}

function computeOrFetch (val, memo) {
  if (memo.has(val)) {
    return memo.get(val)
  } else {
    const sqVal = val * val
    memo.set(val, sqVal)
    return sqVal
  }
}