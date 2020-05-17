export default class Stack {
  constructor() {
    this.storage = [];
  }

  /**
   * Checks if the stack instance is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.storage.length === 0;
  }

  /**
   * Adds an item to the top of a stack instance
   * @param {*} item - an item to be pushed onto the stack
   */
  push(item) {
    this.storage.push(item);
  }

  /**
   * Returns the item at the top of a stack instance
   * @return {*} The item at the top of the stack
   */
  top() {
    return this.storage[this.storage.length - 1] || null;
  }

  /**
   * Removes an item from the top of the stack instance and returns it
   * @return {*} The popped item
   */
  pop() {
    return this.storage.pop() || null;
  }
}