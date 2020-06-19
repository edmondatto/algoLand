/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) { // O(NlogN) using heapsort
  if (nums.length === 1) return nums[0]
  nums.sort(function(num1, num2) {return num1 - num2})
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i - 1]) {
      count++
      if (count > (nums.length/2)) return nums[i]
    } else {
      count = 1
    }
  }
}

function majorityElement2(nums) { // O(NlogN) using heapsort
  nums.sort(function(num1, num2) {return num1 - num2})
  return nums[nums.length / 2]
}

function majorityElement3(nums) { // // Time Complexity => O(N), Space complexity => O(1)
  // Uses Boyer-Moore Majority Vote algorithm
  let majorityElement = null
  let count = 0

  for (let num of nums) {
    if (count === 0) {
      majorityElement = num
    }
    count += majorityElement === num ? 1 : -1
  }
  return majorityElement
}

function majorityElement4(nums) { // Time Complexity => O(N), Space complexity => O(N)
  const numCount = getNumCount(nums)
  const numSet = new Set(nums)

  for (let num of numSet) {
    if (numCount[num] > (nums/2)) return num
  }
}

function getNumCount(numArray) {
  let numCount = {}
  for (let num of numArray) {
    if (numCount[num]) {
      numCount[num]++
    } else {
      numCount[num] = 1
    }
  }
  return numCount
}