class Queue {
  constructor() {
    this.storage = [];
  }

  peek() {
    return this.storage[0] || null;
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift() || null;
  }
}