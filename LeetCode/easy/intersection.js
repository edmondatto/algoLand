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

function intersection2(nums1, nums2) {
  nums1.sort(function(a, b) { return a - b})
  nums2.sort(function(a, b) { return a - b})
  const longerArray = nums2.length >= nums1.length ? nums2 : nums1
  const shorterArray = nums2.length < nums1.length ? nums2 : nums1
  const result = []

  if (shorterArray[0] > longerArray[longerArray.length - 1] ||
    shorterArray[shorterArray[shorterArray.length - 1] < longerArray[0]]) {
    return result
  }

  let i = 0, j = 0;
  while (i < shorterArray.length) {
    if (shorterArray[i] === longerArray[j] && result[result.length - 1] !== shorterArray[i]) {
      result.push(shorterArray[i])
      j++
    } else if (shorterArray[i] > longerArray[j]) {
      j++
    } else {
      i++
    }
  }
  return result
}