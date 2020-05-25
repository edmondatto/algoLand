function twoStrings(s1, s2) { // Time complexity of O(n * m)
  const stringToIterate = s1.length < s2.length ? s1 : s2
  const otherString = s1.length > s2.length ? s1 : s2
  for (let character of stringToIterate) { // O(m) or O(n) depending on which string is iterated over
    if (otherString.indexOf(character) !== -1) { // indexOf potentially runs in O(m) or O(n)
      return 'YES'
    }
  }
  return 'NO'
}

function twoStrings2(s1, s2) { // Time complexity of O(m + n)
  const s1CharacterCount = getCharacterCount(s1)
  for (let character of s2) {
    if (s1CharacterCount.has(character)) {
      return 'YES'
    }
  }
  return 'NO'
}

function getCharacterCount(string) {
  let characterCount = new Map()
  for (let character of string) {
    if (!characterCount.has(character)) {
      characterCount.set(character, 1)
    }
  }
  return characterCount
}