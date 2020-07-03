/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers (left, right) {
  let output = []

  for (let i = left; i <= right; i++) {
    if (i < 10) {
      output.push(i)
    } else {
      isSelfDividingNumber(i) && output.push(i)
    }
  }
  return output
}

function isSelfDividingNumber(n) {
  let reducingNum = n

  while (reducingNum > 0) {
    const remainder = reducingNum % 10

    if (remainder === 0 || n % remainder !== 0) {
      return false
    }

    reducingNum = Math.floor(reducingNum / 10)
  }
  return true
}

console.log(selfDividingNumbers(1, 22))