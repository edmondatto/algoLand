/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
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

function sumZero2(n) {
  const resultArray = []

  for (let i = n; i > Math.ceil(n/2); i--) {
    resultArray.push(i)
  }

  if (n % 2 === 1) resultArray.push(0)

  for (let i = 0; i < Math.floor(n/2); i++) {
    resultArray.push(resultArray[i] * -1)
  }

  return resultArray
}