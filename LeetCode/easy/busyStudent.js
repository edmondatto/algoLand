/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
  let busyStudentCount = 0

  for (let i = 0; i < startTime.length; i++) {
    if (endTime[i] < queryTime || startTime[i] > queryTime) continue

    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      busyStudentCount++
    }
  }

  return busyStudentCount
}