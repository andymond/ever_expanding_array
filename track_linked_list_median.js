const LinkedList = require('./linked_list.js')

module.exports = class TrackLinkedListMedian {
  constructor(limit) {
    this.limit = limit
    this.list = new LinkedList
  }

  run() {
    let medians = new LinkedList
    for (let i = 0; i < this.limit; i++) {
      this.list.append((Math.random() * 100))
      medians.append(this.list.sum()/this.list.count())
    }
    return medians
  }
}
