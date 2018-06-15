const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const LinkedList = require('./linked_list.js')

describe('linked list', () => {
  it('initializes', () => {
    ll = new LinkedList()

    expect(ll.head).to.be.null
    ll.count.should.eq(0)
    ll.sum.should.eq(0)
  })
})
