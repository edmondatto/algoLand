/* Class representing a Node in a Linked List */
class Node {
  constructor(value, isDoublyLinked= false) {
    this.value = value
    this.next = null
    if (isDoublyLinked) {
      this.previous = null
    }
  }
}

/* Class representing a Linked List */
class LinkedList {
  constructor(value) {
    this.head = value ? new Node(value) : null
  }

  /**
   * Adds a node to the end of a LinkedList
   * If the head is set to null, the new node is set as the head
   * @param {*} value - The value of the new node to be added
   * @return {Node} - The head of the LinkedList
   */
  addNode(value) {
    if (!this.head) {
      this.head = new Node(value)
      return this.head
    }

    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(value)
    return this.head
  }

  /**
   * Checks if a node exists in a LinkedList
   * If the head is set to null, the new node is set as the head
   * @param {*} nodeValue - The value of the new node to be searched for
   * @return {boolean} - Whether the node was found
   */
  findNode (nodeValue) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === nodeValue) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  /**
   * Updates a node's value if it exists in the list
   * @param {*} currentNodeValue - The value of the node to be updated
   * @param {*} newNodeValue - The value to update the node with
   * @return {void}
   */
  updateNode (currentNodeValue, newNodeValue) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === currentNodeValue) {
        currentNode.value = newNodeValue
        return
      }
      currentNode = currentNode.next
    }
  }

  /**
   * Inserts a new node at the head of the LinkedList
   * @param {*} nodeValue - The value of new head
   * @return {void}
   */
  insertNewHead(nodeValue) {
    const newNode = new Node(nodeValue)
    newNode.next = this.head
    this.head = newNode
  }

  /**
   * Inserts a new node after a given node in the LinkedList
   * @param {*} nodeValue - The value of the node to be inserted
   * @param {*} newNodeValue - The value of the new node to be inserted
   * @return {Node|null}
   */
  insertAfter(nodeValue, newNodeValue) {
    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.value === nodeValue) {
        const newNode = new Node(newNodeValue)
        newNode.next = currentNode.next
        currentNode.next = newNode
        return this.head
      }

      currentNode = currentNode.next
    }
    return null
  }

  /**
   * Deletes the head of a LinkedList
   * @return {void}
   */
  deleteHead() {
    this.head = this.head.next
  }

  /**
   * Deletes a node in a LinkedList given its value
   * @param {*} nodeValue - The value of the node to be deleted
   * @return {Node|null}
   */
  deleteNode(nodeValue) {
    let previousNode = this.head
    let currentNode = this.head.next

    while (currentNode) {
      if (currentNode.value === nodeValue) {
        previousNode.next = currentNode.next
        currentNode.next = null
        return this.head
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return null
  }

  /**
   * Prints the LinkedList
   * @return {void}
   */
  print() {
    let currentNode =  this.head
    let output = ''

    while (currentNode) {
      output += `${currentNode.value} -> `
      currentNode = currentNode.next
    }
    console.log(output + 'NULL')
  }
}