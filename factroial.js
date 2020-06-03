/**
 * Returns the factorial given a number n
 * @params {number} n - The number whose factorial to return
 * @return {number} The computed factorial
 */
function factorial(n) {
  if (n < 0) return undefined

  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}