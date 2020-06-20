/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) { // Brute force solution O(N)
  const romanIntegerMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0
  let i = 0;
  while (i < s.length) {
    let intValue = null

    if (s[i] === 'I') {
      if (s[i + 1] === 'V') {
        intValue = 4
        i += 2
      } else if (s[i + 1] === 'X') {
        intValue = 9
        i += 2
      } else {
        intValue = 1
        i++
      }
    } else if (s[i] === 'X') {
      if (s[i + 1] === 'L') {
        intValue = 40
        i += 2
      } else if (s[i + 1] === 'C') {
        intValue = 90
        i += 2
      } else {
        intValue = 10
        i++
      }
    } else if (s[i] === 'C') {
      if (s[i + 1] === 'D') {
        intValue = 400
        i += 2
      } else if (s[i + 1] === 'M') {
        intValue = 900
        i += 2
      } else {
        intValue = 100
        i++
      }
    } else {
      intValue = romanIntegerMap[s[i]]
      i++
    }
    result += intValue
  }
  return result
}

function romanToInt2(s) { // Refined solution O(N)
  const romanIntegerMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0
  let i = 0
  while (i < s.length) {
    let intValue = null
    let current = romanIntegerMap[s[i]]
    let next = romanIntegerMap[s[i + 1]]

    if (current < next) {
      intValue = next - current
      i += 2
    } else {
      intValue = current
      i++
    }
    result += intValue
  }
  return result
}