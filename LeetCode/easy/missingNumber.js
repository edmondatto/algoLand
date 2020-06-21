/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) { // O(Nlog(N))
  nums.sort(comparator)
  if (nums[0] !== 0) return 0
  if (nums[nums.length - 1] !== nums.length) return nums.length

  for (let i = 0; i < nums.length; i ++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1
    }
  }
}

function comparator (a, b) {
  return a - b
}

function missingNumber2(nums) { // O(N)
  if (nums.length === 1) return nums[0] === 0 ? nums[nums.length - 1] + 1 : 0

  const numCount = {}

  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]]) {
      numCount[nums[i]]++
    } else {
      numCount[nums[i]] = 1
    }
  }

  for (let i = 0; i <= nums.length; i ++) {
    if (!numCount[i]) {
      return i
    }
  }
}

console.log(missingNumber([0, 1, 2]))