/**
 * @param {string} S
 * @return {string}
 */
function removeDuplicates(S) {
  let i = 0

  while (i < S.length) {
    if (S[i] === S[i + 1]) {
      S = S.substring(0, i) + S.substring(i + 2)
      i = 0
    } else {
      i++
    }
  }
  return S
}