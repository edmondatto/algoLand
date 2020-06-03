/**
 * Returns the minimum perimeter of a rectangle given its area
 * @params {number} area - The area of the rectangle
 * @return {number} The computed minimum perimeter
 */
function minimumPerimeter(area) {
  let width = 1
  let minPerimeter = Number.MAX_SAFE_INTEGER

  while (width < area/2) { // Can further optimise this using Math.sqrt(area)
    const modulo = area % width
    if (modulo === 0) {
      const length = area / width
      console.log(length, width)
      const currentPerimeter = calculatePerimeter(length, width)
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