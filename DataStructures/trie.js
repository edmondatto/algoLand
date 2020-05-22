/* A Class that represents a Node in a Trie */
class Node {
  constructor() {
    this.children = []
    this.size = 0
    this.isWord = false
  }

  /**
   * Return the index of an alphabetic character
   * @param {string} char - A string character
   * @return {number}
   */
  getCharIndex(char) {
    return char.charCodeAt() - 'a'.charCodeAt()
  }

  /**
   * Return the node corresponding to an alphabetic character
   * @param {string} char - A string character
   * @return {Node}
   */
  getNode(char) {
    return this.children[this.getCharIndex(char)]
  }

  /**
   * Return the node corresponding to an alphabetic character
   * @param {string} char - A string character
   * @param {Node} node - The node to be set as a child to the current node
   */
  setNode(char, node) {
    this.children[this.getCharIndex(char)] = node;
  }

  /**
   * Add a word to the trie
   * @param {string} word - The word to be added
   * @param {number} index - The starting index from which to add the word
   */
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

  /**
   * Add multiple words to the trie
   * @param {string[]} words - An array of words to be added
   */
  addWords (words) {
    words.forEach(word => this.addWord(word))
  }

  /**
   * Find how many words match a search term
   * @param {string} word - A word to be used as a search term
   * @param {number} index - The starting index from which to search for the word
   */
  findCount (word, index = 0) {
    if (index === word.length) return this.size

    const child = this.getNode(word.charAt(index))
    if (!child) return 0

    return child.findCount(word, index + 1)
  }
}