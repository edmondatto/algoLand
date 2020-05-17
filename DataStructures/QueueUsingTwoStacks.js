import Stack from "./Stack";

class QueueUsingTwoStacks {
  constructor() {
    this.stackWithNewestItemOnTop = new Stack();
    this.stackWithOldestItemOnTop = new Stack();
  }

  #shiftItemsToOldest() {
    if(this.stackWithOldestItemOnTop.isEmpty()) {
      while (!this.stackWithNewestItemOnTop.isEmpty()) {
        this.stackWithOldestItemOnTop.push(this.stackWithNewestItemOnTop.pop());
      }
    }
  }

  peek() {
    this.#shiftItemsToOldest();
    return this.stackWithOldestItemOnTop.top();
  }

  enqueue(item) {
    this.stackWithNewestItemOnTop.push(item);
  }

  dequeue() {
    this.#shiftItemsToOldest();
    return this.stackWithOldestItemOnTop.pop();
  }
}