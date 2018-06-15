const Node = require('./node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value, current_node = this.head) {
    if (this.head === null) {
      this.head = new Node(value)
    } else if (current_node.next_node === null) {
      current_node.next_node = new Node(value)
    } else {
      current_node = current_node.next_node
      this.append(value, current_node)
    }
  }

  sum(sum = 0, current_node = this.head) {
    if (current_node === null) {
      return sum
    } else {
      sum += current_node.data
      current_node = current_node.next_node
      return this.sum(sum, current_node)
    }
  }
}
