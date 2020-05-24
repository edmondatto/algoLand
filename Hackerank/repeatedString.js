function repeatedString(character, string, numberOfCharacters) {
  if (string === character) return numberOfCharacters
  const completeRepetitions = Math.floor(numberOfCharacters / string.length)
  const partialRepetitionLength = numberOfCharacters % string.length
  const characterCount1 = getCharacterCount(string)
  const characterCount2 = partialRepetitionLength === 0 ? {} : getCharacterCount(string.substring(0, partialRepetitionLength))
  return getOccurrencesOf(character, characterCount1, completeRepetitions) + getOccurrencesOf(character, characterCount2)
}

function getCharacterCount(string) {
  let characterCount = {}
  for(let character of string) {
    if (characterCount[character]) {
      characterCount[character]++
    } else {
      characterCount[character] = 1
    }
  }
  return characterCount
}

function getOccurrencesOf(character, characterCount, repetitions = 1) {
  if (!characterCount[character]) return 0
  return characterCount[character] * repetitions
}