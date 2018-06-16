const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const TrackLinkedListMedian = require('./track_linked_list_median.js')

describe('tracks linked list median', () => {
  it('it initializes with empty linked list', () => {
    let tm = new TrackLinkedListMedian

    tm.list.should.be.an('object')
    expect(tm.list.head).to.be.null
  })

  it('it finds medians of linked list', () => {
    let tm = new TrackLinkedListMedian(4)

    let medians = tm.run()

    medians.head.next_node.next_node.next_node.data.should.eq(tm.list.sum()/tm.list.count())
  })
})
