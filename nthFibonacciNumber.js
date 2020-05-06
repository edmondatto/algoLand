/**
 * Finds the number at the nth index of the Fibonacci sequence
 * @param {number} n - an integer (n >= 0) representing the index of the result to be found
 * @return {number} - the number at the nth index of the Fibonacci sequence
 */
function nthFibonacciNumber(n) {
  if (n === 0) { return 0 } // Time Complexity => O(1)
  if (n === 1) { return 1 } // Time Complexity => O(1)

  // Create array with first 2 Fibonacci Numbers
  const fibonacciSequence = [0,1];

  // Start building out the sequence from Index 2
  let i = 2;

  while(i <= n) { // Time Complexity => O(n - 2)
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]); // Time Complexity => O(1)
    i++;
  }

  return fibonacciSequence[n];
}

/**
 *
 * TEST BED
 *
 */
const solutionSet = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
for (let n = 0; n < 10; n++) {
  const actual = nthFibonacciNumber(n);
  const expected = solutionSet[n];
  console.log(actual === expected);
}

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(1) + O(1) + O(n - 2) + O(1)
 * For the worst case, the constant values are insignificant: T(n) = O(n)
 *
 * Space time complexity is O(n) i.e. max size of the array
 *
 */