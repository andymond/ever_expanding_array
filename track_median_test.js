const chai = require('chai')
const should = chai.should()
const TrackMedian = require('./track_median.js')

describe('TrackMedian', () => {
  it('initializes with array', () => {
    let tm = new TrackMedian(1);

    tm.array.should.deep.eq([])
    tm.sum.should.eq(0)
    tm.limit.should.eq(1)
  })

  it('it appends random number to end of array', () => {
    let tm = new TrackMedian(1);

    tm.array.should.deep.eq([])
    tm.append()

    tm.array.length.should.eq(1)
    tm.array[0].should.be.a('number')
    tm.count.should.eq(1)
    tm.sum.should.eq(tm.array[0])

    tm.append()

    tm.array.length.should.eq(2)
    tm.array[1].should.be.a('number')
    tm.count.should.eq(2)
    tm.sum.should.eq(tm.array[0] + tm.array[1])
  })

  it('it finds median based on current state', () => {
    let tm = new TrackMedian(1);

    tm.append()
    tm.append()

    tm.findMedian().should.eq(tm.sum/tm.count)
  })

  it('it returns array of medians', () => {
    let tm = new TrackMedian(10);

    let medians = tm.run()

    medians.should.be.an('array')
    medians.length.should.eq(10)
    medians[0].should.eq(tm.array[0])
    medians[9].should.eq(tm.sum/tm.count)
  })
})
