const Node = require('./node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
    this.sum = 0;
  }

  append(value, current_node = this.head) {
    if (this.head === null) {
      this.head = new Node(value)
      this.count += 1
      this.sum += value
    } else if (current_node.next_node === null) {
      current_node.next_node = new Node(value)
      this.count += 1
      this.sum += value
    } else {
      current_node = current_node.next_node
      this.append(value, current_node)
    }
  }
}
