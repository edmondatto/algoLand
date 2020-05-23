/* A Class that represents a Min Heap */
class MinHeap {
  constructor() {
    this.items = []
  }

  /**
   * Returns the heap's size
   * @return {number}
   */
  size() {
    return this.items.length
  }

  /**
   * Gets a an Item's left child's index
   * @param {number} index - The parent's index
   * @return {number}
   */
  getLeftChildIndex(index) {
    return (index * 2) + 1
  }

  /**
   * Gets a an Item's left child
   * @param {number} index - The parent's index
   * @return {number}
   */
  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)] || null
  }

  /**
   * Checks if an Item has a left child
   * @param {number} index - The parent's index
   * @return {boolean}
   */
  hasLeftChild(index) {
    return !!this.getLeftChild(index)
  }

  /**
   * Gets a an Item's right child's index
   * @param {number} index - The parent's index
   * @return {number}
   */
  getRightChildIndex(index) {
    return (index * 2) + 2
  }

  /**
   * Gets a an Item's right child
   * @param {number} index - The parent's index
   * @return {number}
   */
  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)]
  }

  /**
   * Checks if an Item has a right child
   * @param {number} index - The parent's index
   * @return {boolean}
   */
  hasRightChild(index) {
    return !!this.getRightChild(index)
  }

  /**
   * Gets a an Item's parent's index
   * @param {number} index - The child's index
   * @return {number}
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  /**
   * Gets a an Item's parent
   * @param {number} index - The child's index
   * @return {number}
   */
  getParent(index) {
    return this.items[this.getParentIndex(index)]
  }

  /**
   * Checks if an Item has a parent
   * @param {number} index - The child's index
   * @return {boolean}
   */
  hasParent(index) {
    return !!this.getParent(index)
  }

  /**
   * Add an Item to the heap
   * @param {number} item - The item to be added
   */
  add(item) {
    this.items.push(item)
    this.heapifyUp()
  }

  /**
   * Returns the item at the top the the heap
   */
  peek() {
    return this.items[0]
  }

  /**
   * Returns the minimum value and removes it from the the heap
   * @return {number}
   */
  poll() {
    const item = this.items[0] || null
    this.items[0] = this.items.pop()
    this.heapifyDown()
    return item
  }

  /**
   * Swaps a parent with its child
   * @param {number} childIndex - The child's index
   * @param {number} parentIndex - The parent's index
   */
  swap(childIndex, parentIndex) {
    const child = this.items[childIndex]
    this.items[childIndex] = this.items[parentIndex]
    this.items[parentIndex] = child
  }

  /**
   * Alters the heap from the bottom up if necessary, to ensure it follows the rules of a min heap
   */
  heapifyUp() {
    let index = this.items.length - 1
    while (this.hasParent(index) && this.items[index] < this.getParent(index)) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  /**
   * Alters the heap from the top down if necessary, to ensure it follows the rules of a min heap
   */
  heapifyDown() {
    let index = 0
    while (this.hasLeftChild(index) && (this.items[index] > this.getLeftChild(index) || this.items[index] > this.getRightChild(index))) {
      let smallerChildIndex = this.getLeftChildIndex(index)

      if (this.hasRightChild(index)) {
        smallerChildIndex = this.getLeftChild(index) > this.getRightChild(index) ? this.getRightChildIndex(index) : smallerChildIndex
      }
      this.swap(smallerChildIndex, index)
      index = smallerChildIndex
    }
  }
}