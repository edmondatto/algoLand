/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) { // O(N)
  let countMap = {}
  let uniqueNums = 0

  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]]) {
      countMap[arr[i]]++
    } else {
      countMap[arr[i]] = 1
      uniqueNums++
    }
  }

  const numSet = new Set(Object.values(countMap))
  return numSet.size === uniqueNums
}