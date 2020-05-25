function findDuplicateElements(array1, array2) {
  if (array1[0] > array2[array2.length - 1] || array1[array1.length - 1] < array2[0]) return 0

  let duplicateElementsFound = 0
  let arrayOnePointer = 0
  let arrayTwoPointer = 0

  while (arrayOnePointer < array1.length) {
    if (!array2[arrayTwoPointer]) {
      return duplicateElementsFound
    }

    if (array1[arrayOnePointer] === array2[arrayTwoPointer]) {
      duplicateElementsFound++
      arrayOnePointer++
      arrayTwoPointer++
    } else if (array1[arrayOnePointer] > array2[arrayTwoPointer]) {
      arrayTwoPointer++
    } else {
      arrayOnePointer++
    }
  }
  return duplicateElementsFound
}