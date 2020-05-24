function hourglassSum(arr) {
  // Alternatively, set hourglassWithMaxSum to Number.MIN_SAFE_INTEGER
  let hourglassWithMaxSum = null

  for(let i = 0; i < arr.length - 2; i++) {
    for(let j = 0; j < arr[0].length - 2; j++) {
      const sum = getHourglassSum(arr, i, j)
      if (hourglassWithMaxSum === null || sum > hourglassWithMaxSum) {
        hourglassWithMaxSum = sum
      }
    }
  }
  return hourglassWithMaxSum
}

function getHourglassSum(arr, i, j) {
  return arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
    + arr[i + 1][j + 1]
    + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
}