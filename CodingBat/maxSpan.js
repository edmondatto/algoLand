// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(arr) {
  let indexMap = new Map()
  let currMaxSpan = 0

  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    if (indexMap.has(arrElement)) {
      currMaxSpan = i - indexMap.get(arrElement) + 1 > currMaxSpan ? i - indexMap.get(arrElement) + 1 : currMaxSpan
    } else {
      indexMap.set(arrElement, i)
    }
  }
  return currMaxSpan
}