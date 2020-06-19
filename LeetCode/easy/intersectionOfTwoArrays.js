/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect (nums1, nums2) { // Time Complexity => O(Nlog(N))
  nums1.sort(comparator)
  nums2.sort(comparator)
  let result = []

  if (nums1[0] > nums2[nums2.length - 1] || nums1[nums1.length - 1] < nums2[0]) return result

  let i = 0, j = 0;
  let shorterArray, longerArray

  if (nums1.length < nums2.length) {
    shorterArray = nums1
    longerArray = nums2
  } else {
    shorterArray = nums2
    longerArray = nums1
  }

  while (i < shorterArray.length) {
    const num1 = shorterArray[i]
    const num2 = longerArray[j]

    if (num1 === num2) {
      result.push(num1)
      i++
      j++
    } else if (num1 > num2) {
      j++
    } else {
      i++
    }
  }

  return result
}

function comparator (a, b) {
  return a - b
}