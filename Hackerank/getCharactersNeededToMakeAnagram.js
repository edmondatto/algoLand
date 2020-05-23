/**
 * Returns the total number of characters that need to be removed to
 * make the two string anagrams of each other
 * @param {string} string1 - One of two string inputs
 * @param {string} string2 - One of two string inputs
 * @return {number} Number of characters that need to be removed to
 * make the two string anagrams of each other
 */
function getCharactersNeeded(string1, string2) {
  const firstString = string1.toLowerCase()
  const secondString = string2.toLowerCase()
  const characterCount1 = getCharacterCount(firstString)
  const characterCount2 = getCharacterCount(secondString)
  return getDelta(characterCount1, characterCount2)
}

/**
 * Returns an array of each character's occurrences in a string
 * @param {string} string - The string whose character to count
 * @return {number[]} Counts per character
 */
function getCharacterCount(string) {
  let result = Array(26).fill(0)
  for (let i  = 0; i < string.length; i++) {
    const characterIndex = string.charCodeAt(i) - 'a'.charCodeAt()
    result[characterIndex]++
  }
  return result
}

/**
 * Returns the difference between character counts for two strings
 * @param {number[]} characterCount1 - An array of each character's occurrences in a string
 * @param {number[]} characterCount2 - An array of each character's occurrences in a string
 * @return {number}
 */
function getDelta(characterCount1, characterCount2) {
  if (characterCount1.length !== characterCount2.length) return

  let delta = 0
  for (let i = 0; i < characterCount1.length; i++) {
    delta += Math.abs(characterCount1[i] - characterCount2[i])
  }
  return delta
}
