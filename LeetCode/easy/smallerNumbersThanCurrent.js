/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) { // O(n^2)
  let result = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        result[i]++
      }
    }
  }
  return result
}