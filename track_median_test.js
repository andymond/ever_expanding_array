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

    tm.append()

    tm.array.length.should.eq(2)
    tm.array[1].should.be.a('number')
  })
})
