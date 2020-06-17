/**
 * @param {string} s
 * @return {number}
 */
function firstUniqueChar(s) {
  const letterCount = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    letterCount[index]++
  }

  for (let i = 0; i < s.length; i++) {
    if (letterCount[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) return i
  }
  return -1
}