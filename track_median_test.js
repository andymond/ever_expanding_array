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
})
