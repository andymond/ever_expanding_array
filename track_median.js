module.exports = class TrackMedian {
  constructor(limit) {
    this.array = []
    this.sum = 0
    this.count = 0
    this.limit = limit
  }

  run() {
    let medians = []
    for (let i = 0; i < this.limit; i++) {
      this.append()
      medians.push(this.findMedian())
    }
    return medians
  }

  append() {
    let num = Math.random() * 100
    this.array.push(num)
    this.count += 1
    this.sum += num
  }

  findMedian() {
    return this.sum / this.count
  }

}
