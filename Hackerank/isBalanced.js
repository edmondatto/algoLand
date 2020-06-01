function isBalanced1(s) {
  let stackOfBrackets = []
  let tokenPairs = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  for (let bracket of s) {
    if (stackOfBrackets.length === 0) {
      stackOfBrackets.push(bracket)
    } else if (bracket === tokenPairs[stackOfBrackets[stackOfBrackets.length - 1]]) {
      stackOfBrackets.pop()
    } else {
      stackOfBrackets.push(bracket)
    }
  }
  return stackOfBrackets.length === 0 ? 'YES' : 'NO'
}

function isBalanced2(s) {
  let n = -1;
  while (s.length !== n) {
    n = s.length;
    s = s.replace('()', '');
    console.log(s)
    s = s.replace('[]', '');
    console.log(s)

    s = s.replace('{}', '');
    console.log(s)

  }
  if (s.length === 0)
    return "YES"
  else
    return "NO"
}

console.log(isBalanced2('{[[()]][]}'))