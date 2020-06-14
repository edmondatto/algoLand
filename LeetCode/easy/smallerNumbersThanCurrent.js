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

function smallerNumbersThanCurrent2(nums) { // O(n)
  const sortedArray = [...nums].sort(function (a,b) {return a - b})
  let result = []
  let countMap = {}
  countMap[sortedArray[0]] = 0

  for (let i = 1; i < sortedArray.length; i++) {
    if (!countMap[sortedArray[i]] && sortedArray[i] > sortedArray[i - 1]) {
      countMap[sortedArray[i]] = i
    }
  }

  for (let num of nums) {
    result.push(countMap[num])
  }

  return result
}