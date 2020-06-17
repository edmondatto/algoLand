/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  const alphabet = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 'a'.charCodeAt()
    alphabet[index]++
    index = t[i].charCodeAt() - 'a'.charCodeAt()
    alphabet[index]--
  }
  const sum = getArraySum(alphabet)
  return sum === 0
}

function getArraySum(arr) {
  return arr.reduce((a, b) => a + Math.abs(b), 0)
}