/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) { // Time complexity => O(n), Space complexity => O(1)
  if (s.length !== t.length) return false

  const letterCount = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 'a'.charCodeAt()
    letterCount[index]++
    index = t[i].charCodeAt() - 'a'.charCodeAt()
    letterCount[index]--
  }

  for (let count of letterCount) {
    if (count !== 0) {
      return false
    }
  }
  return true
}