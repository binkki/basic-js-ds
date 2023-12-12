const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return {...this.queue};;
  }

  enqueue(value) {
    let currentNode = this.queue;
    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    let newNode = new ListNode(value);
    if (currentNode === null) {
      this.queue = newNode;
    } else {
      currentNode.next = newNode;   
    }
  }

  dequeue() {
    let currentNode = this.queue;
    if (currentNode === null) {
      return null;
    }
    this.queue = this.queue.next;
    return currentNode.value;
  }
}

module.exports = {
  Queue
};
