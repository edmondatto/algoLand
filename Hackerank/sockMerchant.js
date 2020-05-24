function sockMerchant(socksArray) {
  let sockPairs = 0
  const sockColorCount = getSockColorCount(socksArray)

  for(let sock in sockColorCount) {
    sockPairs += Math.floor(sockColorCount[sock]/2)
  }
  return sockPairs
}

function getSockColorCount(socksArray) {
  let sockColorCount = {}
  for(let sock of socksArray) {
    if(sockColorCount[sock]) {
      sockColorCount[sock]++
    } else {
      sockColorCount[sock] = 1
    }
  }
  return sockColorCount
}