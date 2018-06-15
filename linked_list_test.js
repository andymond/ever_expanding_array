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

  it('appends', () => {
    ll = new LinkedList()
    ll.append(12)

    ll.head.data.should.eq(12)

    ll.append(1)
    ll.head.next_node.data.should.eq(1)

    ll.append(10)
    ll.head.next_node.next_node.data.should.eq(10)
  })
})
