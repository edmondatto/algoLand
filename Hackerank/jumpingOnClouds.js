function jumpingOnClouds(cloudsArray) {
  let jumps = 0
  let counter = 0;
  while(counter < cloudsArray.length - 1) {
    const idealNextCloud = cloudsArray[counter + 2]
    if(idealNextCloud === 0) {
      counter += 2
      jumps++
    } else {
      counter++
      jumps++
    }
  }
  return jumps
}