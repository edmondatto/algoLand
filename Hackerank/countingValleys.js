function countingValleys(steps) {
  let level = 0
  let valleysCount = 0
  for (let i = 0; i < steps.length; i++) {
    const currentTrajectory = steps[i].toLowerCase()
    currentTrajectory === 'd' ? level-- : level++
    if (level === 0 && currentTrajectory === 'u') {
      valleysCount++
    }
  }
  return valleysCount
}