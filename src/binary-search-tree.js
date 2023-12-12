const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root() === null) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.root();
      let parentNode;
      while (currentNode != null) {
        parentNode = currentNode;
        currentNode = currentNode.data <= newNode.data ? currentNode.right : currentNode.left;
      }
      if (parentNode.data < newNode.data) {
        parentNode.right = newNode;
      } else {
        parentNode.left = newNode;
      }
    }
  }

  has(data) {
    let currentNode = this.root();
    let isFound = false;
    while (currentNode != null) {
      if (currentNode.data === data) {
        isFound = true;
        break;
      } else {
        currentNode = currentNode.data <= data ? currentNode.right : currentNode.left;
      }
    }
    return isFound;
  }

  find(data) {
    let foundData = null;
    let currentNode = this.root();
    while (currentNode != null) {
      if (currentNode.data === data) {
        foundData = currentNode;
        break;
      } else {
        currentNode = currentNode.data <= data ? currentNode.right : currentNode.left;
      }
    }
    return foundData;
  }

  remove(data) {
    if (this.has(data) === false) {
      return;
    }
    let currentNode = this.root();
    let parentNode = null;
    while (currentNode.data != data) {
      parentNode = currentNode;
      if (currentNode.data === data) {
        break;
      } else {
        currentNode = currentNode.data <= data ? currentNode.right : currentNode.left;
      }
    }
    if (parentNode === null) {
      this.rootNode = null;
    } else {
      if (parentNode && parentNode.data < data) {
        parentNode.right = null;
      } else if (parentNode && parentNode.data >= data) {
        parentNode.left = null;
      }
    }
    let newNodes = [currentNode];
    while (newNodes.length > 0) {
      currentNode = newNodes.pop();
      if (currentNode.left !== null) {
        newNodes.push(currentNode.left);
        this.add(currentNode.left.data);
      }   
      if (currentNode.right !== null) {
        newNodes.push(currentNode.right);
        this.add(currentNode.right.data);
      }
    }
  }

  min() {
    let currentNode = this.root();
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.root();
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};