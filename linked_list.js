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
}
