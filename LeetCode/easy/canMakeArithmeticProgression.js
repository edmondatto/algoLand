/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  arr.sort(comparator)
  const diff = arr[1] - arr[0]

  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] - arr[i - 1] !== diff) return false
  }
  return true
}

function comparator (a, b) {
  return a - b
}