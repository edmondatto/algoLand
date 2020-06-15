/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  let output = []

  for (let i = 0; i < nums.length; i += 2) {
    let frequency = nums[i]
    while (frequency > 0) {
      output.push(nums[i + 1])
      frequency--
    }
  }

  return output
}