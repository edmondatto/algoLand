/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let count = 0
  let charsToMatch = []

  for (let i = 0; i < s.length; i++) {
    if (charsToMatch.length === 0) {
      charsToMatch.push(s[i])
    } else {
      if (s[i] !== charsToMatch[charsToMatch.length - 1]) {
        charsToMatch.pop()
        if (charsToMatch.length === 0) count++
      } else {
        charsToMatch.push(s[i])
      }
    }
  }
  return count
}

function balancedStringSplit2(s) {
  let stringsCount = 0, lCount = 0, rCount = 0;

  for (let char of s) {
    char === 'L' ? lCount++ : rCount++
    if (lCount === rCount) {
      stringsCount++
      lCount = 0
      rCount = 0
    }
  }
  return stringsCount
}

console.log(balancedStringSplit2("RLRRLLRLRL"))