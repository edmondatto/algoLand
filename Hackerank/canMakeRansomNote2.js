function canMakeRansomNote(magazine, note) {
  if (magazine.length < note.length) return false

  const magazineWordCount = getWordCount(magazine)
  const noteWordCount = getWordCount(note)
  return hasEnoughWords(magazineWordCount, noteWordCount)
}

function getWordCount(source) {
  let wordCount = {  }
  for (let i = 0; i < source.length; i++) {
    const word = source[i]
    if (!wordCount[word]) {
      wordCount[word] = 0
    }
    wordCount[word]++
  }
  return wordCount
}

function hasEnoughWords(magazineWordCount, noteWordCount) {
  for (const word of Object.keys(noteWordCount)) {
    if (!magazineWordCount[word] || magazineWordCount[word] < noteWordCount[word]) {
      return false
    }
  }
  return true
}