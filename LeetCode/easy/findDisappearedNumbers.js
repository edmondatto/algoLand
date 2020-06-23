/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) { // Space Complexity => O(N), Time Complexity => O(N)
  const numSet = new Set(nums)
  let output = []

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      output.push(i)
    }
  }
  return output
}