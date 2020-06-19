/**
 * initialize your data structure here.
 */
function MinStack() {
  this.store = []
  this.minStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.store.push(x)
  if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.store[this.store.length - 1] === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
  this.store.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};