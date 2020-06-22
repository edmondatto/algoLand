/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  let result = 0
  const stonesMap = {}

  for (let char of S) {
    if (stonesMap[char]) {
      stonesMap[char]++
    } else {
      stonesMap[char] = 1
    }
  }

  for (let char of J) {
    if(stonesMap[char]) {
      result += stonesMap[char]
    }
  }

  return result
}