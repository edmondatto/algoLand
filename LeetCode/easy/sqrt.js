/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  for (let i = 0; i <= x; i++) {
    if (i * i === x) return i
    if (i * i > x) return i - 1
  }
}

console.log(mySqrt(0))