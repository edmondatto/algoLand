/**
 * @param {number} n
 * @return {number}
 */
function countPrimes (n) { // Runtime can be greatly improved using the Sieve of Eratosthenes
  const solution = [0, 0, 0, 1]

  for (let i = 4; i <= n; i++) {
    if(isPrime(i - 1)) {
      solution.push(solution[i - 1] + 1)
    }else {
      solution.push(solution[i - 1])
    }
  }
  return solution[n]
}

function isPrime(n) {
  if (n <= 1) return false

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}