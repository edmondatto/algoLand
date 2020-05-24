function canMakeRansomNote(magazine, note) {
  if (magazine.length < note.length) return false

  const noteWordCount = getWordCount(note)
  return hasEnoughWords(magazine, noteWordCount)
}

function getWordCount(source) {
  let wordCount = { sum: 0 }
  for (let i = 0; i < source.length; i++) {
    const word = source[i]
    if (!wordCount[word]) {
      wordCount[word] = 0
    }
    wordCount[word]++
    wordCount['sum']++
  }
  return wordCount
}

function hasEnoughWords(magazine, noteWordCount) {
  let i = 0
  while (i < magazine.length) {
    const word = magazine[i]
    if (noteWordCount[word]) {
      noteWordCount[word]--
      noteWordCount['sum']--
    }
    if (noteWordCount['sum'] === 0) {
      return true
    }
    i++
  }
  return false
}