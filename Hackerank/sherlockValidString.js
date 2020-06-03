function isValid(s) {
  const characterCount = getCharacterCount(s)
  const counts = Object.values(characterCount)
  if (Math.min(...counts) === Math.max(...counts)
    || Math.max(...counts) - Math.min(...counts) === 1) {
    return 'YES'
  }
  return 'NO'
}