/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const longerArray = nums2.length >= nums1.length ? nums2 : nums1
  const shorterArray = nums2.length < nums1.length ? nums2 : nums1
  const set1 = new Set(longerArray)
  const result = new Set()

  for (let elem of shorterArray) {
    if (set1.has(elem)) {
      result.add(elem)
    }
  }
  return [...result]
}