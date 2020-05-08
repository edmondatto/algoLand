
/**
 * @param {number[]} inputArray - array of sorted integers
 * @param {number} targetValue - value to search for
 * @return {number} - The index of the element if it's found, or -1 if not
 */
function binarySearch(inputArray, targetValue) {
  let lowerBound = 0, upperBound = inputArray.length - 1;

  while (lowerBound <= upperBound) {
    console.log(lowerBound, upperBound)

    const  middleIndex = Math.floor((upperBound + lowerBound)/2);
    const middleValue = inputArray[middleIndex];

    if (middleValue === targetValue) {
      return middleIndex;
    } else if (middleValue < targetValue) {
      lowerBound = middleIndex + 1;
    } else {
      upperBound = middleIndex - 1;
    }
  }
  return -1;
}

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(logN)
 * Space complexity = O(1) since the algorithm searches in place
 *
 */