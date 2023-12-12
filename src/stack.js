const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack = [...this.stack, element];
  }

  pop() {
    let topElement = this.peek();
    if (topElement !== undefined) {
      let newStack = [];
      for (let i = 0; i < this.stack.length - 1; i++) {
        newStack = [...newStack, this.stack[i]];
      }
      this.stack = newStack;
    }
    return topElement;
  }

  peek() {
    let topElement = undefined;
    if (this.stack) {
      topElement = this.stack[this.stack.length-1]; 
    }
    return topElement;
  }
}

module.exports = {
  Stack
};
