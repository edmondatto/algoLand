/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let overflow = 0

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      overflow = 1
    } else {
      digits[i]++
      overflow = 0
      return digits
    }
  }
  return [1, ...digits]
}