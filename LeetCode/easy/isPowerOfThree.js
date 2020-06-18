/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n < 1) return false
  while (n) {
    if (n === 1) return true
    if (n % 3 === 0) {
      n /= 3
    } else {
      return false
    }
  }
}