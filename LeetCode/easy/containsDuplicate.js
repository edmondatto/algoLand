/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate (nums) {
  const resultSet = new Set(nums)

  return resultSet.size !== nums.length
}

function containsDuplicate2(nums) {
  nums.sort(function(a, b) { return a - b })

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) return true
  }
  return false
}