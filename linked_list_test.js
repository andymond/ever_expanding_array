const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const LinkedList = require('./linked_list.js')

describe('linked list', () => {
  it('initializes', () => {
    ll = new LinkedList()

    expect(ll.head).to.be.null
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

  it('sums', () => {
    ll = new LinkedList()

    ll.append(12)
    ll.sum().should.eq(12)

    ll.append(1)
    ll.sum().should.eq(13)

    ll.append(10)
    ll.sum().should.eq(23)
  })

  it('count nodes in list', () => {
    ll = new LinkedList()

    ll.count().should.eq(0)

    ll.append(12)
    ll.count().should.eq(1)

    ll.append(1)
    ll.count().should.eq(2)

    ll.append(4)
    ll.count().should.eq(3)
  })
})
