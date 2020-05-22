class Node {
  constructor() {
    this.children = []
    this.size = 0
    this.isWord = false
  }

  getCharIndex(char) {
    return char.charCodeAt() - 'a'.charCodeAt()
  }

  getNode(char) {
    return this.children[this.getCharIndex(char)]
  }

  setNode(char, node) {
    this.children[this.getCharIndex(char)] = node;
  }

  addWord(word, index = 0) {
    this.size++
    if (index === word.length) {
      this.isWord = true
      return
    }

    const currentChar = word.charAt(index)
    let child = this.getNode(currentChar)
    if (!child) {
      child = new Node()
      this.setNode(currentChar, child)
    }
    child.addWord(word, index + 1)
  }

  addWords (words) {
    words.forEach(word => this.addWord(word))
  }

  findCount (word, index = 0) {
    if (index === word.length) return this.size

    const child = this.getNode(word.charAt(index))
    if (!child) return 0

    return child.findCount(word, index + 1)
  }
}