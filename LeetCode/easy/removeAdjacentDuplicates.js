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

function removeDuplicates2(S) {
  let stack = []

  for (let i = 0; i < S.length; i++) {
    if (stack.length > 0 && S[i] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
}