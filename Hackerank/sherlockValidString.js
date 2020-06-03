function isValid(s) {
  const characterCount = getCharacterCount(s)
  const counts = Object.values(characterCount)
  if (Math.min(...counts) === Math.max(...counts)
    || Math.max(...counts) - Math.min(...counts) === 1) {
    return 'YES'
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