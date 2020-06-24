// withoutString("Hello there", "llo") → "He there"
// withoutString("Hello there", "e") → "Hllo thr"
// withoutString("Hello there", "x") → "Hello there"

function withoutString(s1, s2) {
  if (s1.length < s2.length) return s1
  let result = ''
  let i = 0

  while (i < s1.length) {
    const substr = s1.substring(i, i + s2.length)
    if (substr !== s2) {
      result += s1[i]
      i++
    } else {
      i += s2.length
    }
  }
  return result
}