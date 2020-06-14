/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity (A) { // O(n) time and space complexity
  const oddNumbers = []
  const evenNumbers = []

  for (const number of A) {
    number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number)
  }

  return [...evenNumbers, ...oddNumbers]
}

function sortArrayByParity2(A) {
  let i = 0
  let j = A.length - 1

  while (i < j) {
    if (A[i] % 2 > A[j] % 2) {
      const temp = A[i]
      A[i]  = A[j]
      A[j] = temp
      i++
      j--
    }

    if (A[i] % 2 === 0) i++

    if (A[j] % 2 === 1) j--
  }

  return A
}

