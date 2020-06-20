/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let lastUniqueIndex = 0
  let i = 0

  while (i < nums.length) {
    if (nums[i] !== nums[lastUniqueIndex]) {
      lastUniqueIndex++
      nums[lastUniqueIndex] = nums[i]
    }
    i++
  }
  return lastUniqueIndex + 1
}