import Stack from "./Stack";

class QueueUsingTwoStacks {
  constructor() {
    this.stackWithNewestItemOnTop = new Stack();
    this.stackWithOldestItemOnTop = new Stack();
  }

  #shiftItemsToOldest() {
    while (!this.stackWithNewestItemOnTop.isEmpty()) {
      this.stackWithOldestItemOnTop.push(this.stackWithNewestItemOnTop.pop());
    }
  }

  peek() {
    if(this.stackWithOldestItemOnTop.isEmpty()) {
      this.#shiftItemsToOldest();
    }
    return this.stackWithOldestItemOnTop.top();
  }

  enqueue(item) {
    this.stackWithNewestItemOnTop.push(item);
  }

  dequeue() {
    if (this.stackWithOldestItemOnTop.isEmpty()) {
      this.#shiftItemsToOldest();
    }
    return this.stackWithOldestItemOnTop.pop();
  }
}