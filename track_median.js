module.exports = class TrackMedian {
  constructor(limit) {
    this.array = []
    this.sum = 0
    this.count = 0
    this.limit = limit
  }

  run(medians = []) {
    if (this.count === this.limit) {
      return medians
    } else {
      this.append()
      medians.push(this.findMedian())
      return this.run(medians)
    }
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
