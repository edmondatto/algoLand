/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const resultSet = new Set()
  for (let word of words) {
    resultSet.add(getMorseTransformation(word))
  }
  return resultSet.size
}

function getMorseTransformation(word) {
  const morseAlphabet = [
    ".-","-...","-.-.","-..",".","..-.", "--.",
    "....","..",".---","-.-",".-..", "--","-.",
    "---",".--.","--.-",".-.", "...","-","..-",
    "...-",".--","-..-","-.--","--.."
  ]
  let result = ''

  for (let char of word) {
    const index = char.charCodeAt() - 'a'.charCodeAt()
    result += morseAlphabet[index]
  }
  return result
}