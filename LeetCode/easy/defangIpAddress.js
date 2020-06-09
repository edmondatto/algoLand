function defangIPaddr(address) {
  let output = ''

  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      output += '[.]'
    } else {
      output += address[i]
    }
  }
  return output
}

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(n)
 *
 * Space time complexity is O(n)
 *
 */