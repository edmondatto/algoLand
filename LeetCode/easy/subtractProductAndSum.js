function subtractProductAndSum(n) {
  let product = 1
  let sum = 0

  const nString = n.toString()

  for (let char of nString) {
    const parsedChar = Number.parseInt(char);
    product *= parsedChar
    sum += parsedChar
  }

  return product - sum
}