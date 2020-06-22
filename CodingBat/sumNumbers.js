// sumNumbers("abc123xyz") → 123
// sumNumbers("aa11b33") → 44
// sumNumbers("7 11") → 18

function sumNumbers(s) {
  const S = s.trim()
  let sum = 0
  let numString = ''

  for (let i = 0; i < S.length; i++) {
    if (!isNaN(S[i])) {
      numString += S[i]
    }

    if ((isNaN(S[i + 1]) || S[i + 1] === ' ') && numString) {
      sum += +numString
      numString = ''
    }
  }

  return sum
}

console.log(sumNumbers('aa11b33'))