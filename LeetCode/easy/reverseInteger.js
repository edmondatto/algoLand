/**
 * @param {number} x
 * @return {number}
 */
function reverseInteger(x) { // Time complexity O(N) Space Complexity => O(N)
  const numStr = x.toString()
  let reversedNumStr = ''

  for (let i = numStr.length - 1; i >= 0; i--) {
    if(numStr[i] === '-') continue
    reversedNumStr += numStr[i]
  }

  const result = x < 0 ? -reversedNumStr : +reversedNumStr
  return (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) ? 0 : result
}

function reverseInteger2(x) { // Time complexity O(log(N)) Space Complexity => O(1)
  let result = 0

  while (x !== 0) {
    result = result * 10 + (x % 10)
    x =  x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
  }

  return (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) ? 0 : result
}