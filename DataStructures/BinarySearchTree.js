/** Class representing a BST. */
class Node {
  /**
   * Create a BST.
   * @param {*} value - The value of the root node.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Insert a new node into the BST.
   * @param {*} value - The value to be inserted.
   */
  insert(value) {
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  /**
   * Checks if the BST contains a value.
   * @param {*} value - The value to be found in the BST.
   * @return {boolean}
   */
  contains(value) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left) {
        return this.left.contains(value);
      }
      return false;
    } else {
      if (this.right) {
        return this.right.contains(value);
      }
      return false;
    }
  }

  /**
   * Prints all the nodes in the BST in ascending order
   */
  printInOrder() {
    if (this.left) {
      this.left.printInOrder();
    }

    console.log(this.value);

    if (this.right) {
      this.right.printInOrder();
    }
  }
}