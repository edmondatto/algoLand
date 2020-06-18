/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) { // O(logN)
  if (n < 1) return false

  while (n % 3 === 0) {
    n /= 3
  }

  return n === 1
}

function isPowerOfThree2(n) { // O(1)
  // 3 ^ 19 is the largest integer value that's a power of 3
  return n > 0 && Math.pow(3, 19) % 3 === 0
}