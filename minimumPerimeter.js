/**
 * Returns the minimum perimeter of a rectangle given its area
 * @params {number} area - The area of the rectangle
 * @return {number} The computed minimum perimeter
 */
function minimumPerimeter(area) {
  let width = 1
  let minPerimeter = Number.MAX_SAFE_INTEGER

  while (width <= Math.sqrt(area)) { // O(n^1/2)
    const isModuloZero = area % width === 0
    if (isModuloZero) {
      const length = area / width
      const currentPerimeter = calculatePerimeter(length, width) // O(1)
      if (minPerimeter > currentPerimeter) {
        minPerimeter = currentPerimeter
      }
    }
    width++
  }
  return minPerimeter
}

/**
 * Returns the perimeter of a rectangle given its length and width
 * @params {number} length - The length of the rectangle
 * @params {number} width - The width of the rectangle
 * @return {number} The computed perimeter
 */
function calculatePerimeter(length, width) {
  return 2 * (length + width)
}

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(n^1/2)
 *
 * Space time complexity is O(1) i.e. no new data structures are used
 *
 */