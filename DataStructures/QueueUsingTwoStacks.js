import Stack from "./Stack";

/* A Class representing a Stack */
class QueueUsingTwoStacks {
  constructor() {
    this.stackWithNewestItemOnTop = new Stack();
    this.stackWithOldestItemOnTop = new Stack();
  }

  /**
   * Moves all items from the stack with the oldest items to the one with new items
   * @return void
   */
  #shiftItemsToOldest() {
    if(this.stackWithOldestItemOnTop.isEmpty()) {
      while (!this.stackWithNewestItemOnTop.isEmpty()) {
        this.stackWithOldestItemOnTop.push(this.stackWithNewestItemOnTop.pop());
      }
    }
  }

  /**
   * Returns the item at the front of the queue
   * @return {*} - The item at the front of the queue
   */
  peek() {
    this.#shiftItemsToOldest();
    return this.stackWithOldestItemOnTop.top();
  }

  /**
   * Adds an item to the back of the queue
   * @param {*} item - The item to be added to the queue
   * @return void
   */
  enqueue(item) {
    this.stackWithNewestItemOnTop.push(item);
  }

  /**
   * Removes the item at the front of the queue and returns it
   * @return {*} item - The item to be removed from the queue
   */
  dequeue() {
    this.#shiftItemsToOldest();
    return this.stackWithOldestItemOnTop.pop();
  }
}