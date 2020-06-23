// Given a non-empty string like "Code" return a string like "CCoCodCode".
//
//
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

function stringSplosion(s) {
  let i = 1, output = ''

  while (i <= s.length) {
    output += s.substring(0, i)
    i++
  }

  return output
}