/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) { // O(n) solution
  const resultArray = []
  let currentSum = 0

  for (n; n > 0; n--) {
    if (n === 1) {
      resultArray.push(0 - currentSum)
    } else {
      resultArray.push(n)
      currentSum += n
    }
  }
  return resultArray
}

function sumZero2(n) { // O(n/2) solution
  const resultArray = []

  for (let i = n; i > Math.ceil(n/2); i--) {
    resultArray.push(i)
    resultArray.push(-i)
  }

  if (n % 2 === 1) resultArray.push(0)

  return resultArray
}