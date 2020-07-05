/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
  let output = ''

  for (let char of str) {
    const isUpperCase = checkIfCharIsUpperCase(char)
    if (isUpperCase) {
      output += charToLowerCase(char)
    } else {
      output += char
    }
  }
  return output
}

function checkIfCharIsUpperCase(char) {
  const charCode = char.charCodeAt()
  return charCode > 64 && charCode < 91;

}

function charToLowerCase(char) {
  return String.fromCharCode(char.charCodeAt() + 32)
}