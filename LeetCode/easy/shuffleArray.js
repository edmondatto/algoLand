/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffleArray(nums, n) {
  // space complexity => S(n) = O(n)
  // Time complexity => T(n) = O(n)
  const shuffledArray = []

  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i])
    shuffledArray.push(nums[n + i])
  }

  return shuffledArray
}

console.log(shuffleArray([2,5,1,3,4,7], 3))