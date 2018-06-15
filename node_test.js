const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const Node = require('./node.js')

describe('Node', () => {
  it('initializes', () => {
    let node = new Node(1)

    node.data.should.eq(1)
    expect(node.next_node).to.be.null
  })
})
