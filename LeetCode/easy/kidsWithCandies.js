function kidsWithCandies (candies, extraCandies) {
  const maxNumber = Math.max(...candies)
  const result = []

  for (let candy of candies) {
    result.push(candy + extraCandies >= maxNumber)
  }
  return result
}