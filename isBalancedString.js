/**
 * Checks whether a string is balanced
 * @param {string} inputString - String to be checked
 * @param {[]} tokens - The tokens used to check the string
 * @return {boolean}
 */
function isBalancedString(inputString, tokens) {
  if (typeof inputString !== 'string' || !inputString) {
    return false
  }

  const tokenStack = new Stack();

  for (const char of inputString) {
    if (tokenStack.isEmpty()) {
      tokenStack.push(char);
    } else {
      if (char === getClosingToken(tokens, tokenStack.top())) {
        tokenStack.pop();
      } else {
        tokenStack.push(char);
      }
    }
  }
  return tokenStack.isEmpty();
}

/**
 * Returns a token's matching closing token
 * @param {[]} tokens - Array of all tokens available
 * @param {string} tokenToMatch - The token to be matched against
 * @return {string}
 */
function getClosingToken(tokens, tokenToMatch) {
  for (const tokenSet of tokens) {
    if (tokenSet[0] === tokenToMatch) {
      return tokenSet[1];
    }
  }
}

class Stack {
  constructor() {
    this.storage = [];
  }

  /**
   * Checks if the stack instance is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.storage.length === 0;
  }

  /**
   * Adds an item to the top of a stack instance
   * @param {*} item - an item to be pushed onto the stack
   */
  push(item) {
    this.storage.push(item);
  }

  /**
   * Returns the item at the top of a stack instance
   * @return {*} The item at the top of the stack
   */
  top() {
    return this.storage[this.storage.length - 1];
  }

  /**
   * Removes an item from the top of the stack instance and returns it
   * @return {*} The popped item
   */
  pop() {
    return this.storage.pop();
  }
}

/**
 *
 * TEST BED
 *
 */
const tokens = [['{', '}'], ['(', ')'], ['[', ']']];
console.log(isBalancedString('{()[{}](({}))}', tokens));
console.log(isBalancedString('{()[{}](({})', tokens));
console.log(isBalancedString('{', tokens));
console.log(isBalancedString('{}', tokens));
console.log(isBalancedString('', tokens));
console.log(isBalancedString(null, tokens));

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(ST)
 * Where S is the length of the string, and T is the length of the tokens
 *
 * Can be done in O(S) if a hashmap is used to reduce O(T) to O(1)
 *
 * Space time complexity is O(N) i.e. max size of stack
 *
 */