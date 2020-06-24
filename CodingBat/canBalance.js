// Given a non-empty array, return true if there is a place to split the array so that the
// sum of the numbers on one side is equal to the sum of the numbers on the other side.
//
// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true
// canBalance([1, 2, 3, 4, 5, 2, 1, 1, 1]) → true

function canBalance(nums) {
  let i = 0, j = nums.length - 1, rSum = 0, lSum = 0

  while (i <= j) {
    if (rSum <= lSum) {
      rSum += nums[i]
      i++
    } else {
      lSum += nums[j]
      j--
    }
  }
  return rSum === lSum
}

// balance([1, 1, 1, 2, 1]) → [ [ 1, 1, 1 ], [ 2, 1 ] ]
// balance([2, 1, 1, 2, 1]) → [ 2, 1, 1, 2, 1 ]
// balance([1, 2, 3, 4, 5, 2, 1, 1, 1]) → [ [ 1, 2, 3, 4 ], [ 5, 2, 1, 1, 1 ] ]
function balance(nums) {
  let i = 0, j = nums.length - 1, rSum = 0, lSum = 0

  while (i <= j) {
    if (rSum <= lSum) {
      rSum += nums[i]
      i++
    } else {
      lSum += nums[j]
      j--
    }
  }
  return rSum === lSum ? [ nums.slice(0, i), nums.slice(j + 1) ] : nums
}