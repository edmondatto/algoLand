/**
 * @param {number[]} nums
 * @return {number[]} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let i = 0, j = 1;

  while (j < nums.length) {
    if (nums[i] === 0) {
      if (nums[i] === nums[j]) {
        j++
      } else {
        nums[i] = nums[j]
        nums[j] = 0
        i++
        j++
      }
    } else {
      i++
      j++
    }
  }
  return nums
}