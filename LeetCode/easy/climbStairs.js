/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) { // Time Complexity => O(n) Space complexity => O(n)
  let numOfSteps = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    numOfSteps[i] = numOfSteps[i - 1] + numOfSteps[i - 2]
  }
  return numOfSteps[n ]

}

function climbStairs2(n) { // Time Complexity => O(n) Space complexity => O(1)
  if (n === 1) return 1

  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    const third = first + second
    first = second
    second = third
  }
  return second
}