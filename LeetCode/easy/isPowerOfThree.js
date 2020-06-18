/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n < 1) return false

  while (n % 3 === 0) {
    n /= 3
  }

  return n === 1
}