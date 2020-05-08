// Given a string, find the first repeated character in it e.g. for an
// input of 'abcdebh', the function should return 'b'. For a string with
// no repeating characters e.g. 'abc', it should return null

/**
 * @param {string} s - String input
 * @return {string | null} - The first repeating character or null if no character repeats
 */
function firstRepeatingCharacterInString(s) {
  // Keep track of seen characters
  const seenChars = {};  // Time Complexity => O(1)

  for (let i = 0; i < s.length; i++) {  // Time Complexity => O(n)
    const currentChar = s.charAt(i)
    if (seenChars.hasOwnProperty(currentChar) ) {  // Time Complexity => O(1)
      return currentChar;
    } else {
      seenChars[currentChar] = 1;  // Time Complexity => O(1)
    }
  }
  return null;
}

console.log(firstRepeatingCharacterInString('ABc'));

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(1) + O(n) + O(1) + O(1)
 * For the worst case, the constant values are insignificant: T(n) = O(n)
 *
 * Space time complexity is O(n) i.e. max size of the string in case of no
 * repeating characters
 *
 */