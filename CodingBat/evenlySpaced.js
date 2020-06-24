// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c) {
  const nums = [a, b, c].sort(function (a, b) { return a - b })
  return nums[1] - nums[0] === nums[2] - nums[1]
}