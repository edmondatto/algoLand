/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let numOfSteps = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    numOfSteps[i] = numOfSteps[i - 1] + numOfSteps[i - 2]
  }
  return numOfSteps[n ]

}