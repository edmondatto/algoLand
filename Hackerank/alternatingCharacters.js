function alternatingCharacters(s) {
  let previousCharacter = null
  let charsToDelete = 0

  for (let char of s) {

    if (char === previousCharacter) {
      charsToDelete++
    } else {
      previousCharacter = char
    }
  }
  return charsToDelete
}