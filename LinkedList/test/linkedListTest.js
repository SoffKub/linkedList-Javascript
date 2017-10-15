const LinkedList = require('../lib/LinkedList/linked-list')
const should = require('should');
require ("mocha");


describe("Linked list", () => {

    it('Should initialize as an empty list with head and tail to null and length 0', () => {
        const list = new LinkedList();
        should.equal(list.head(), null);
        should.equal(list.tail(), null);
        should.equal(list.length(), 0);
    });
    it('Adding node to end of list', () => {
        const list = new LinkedList();
        list.length().should.be.exactly(0);
        list.append('pos 0')
        list.append('pos 1')
        list.length().should.be.exactly(2);
        list.head().should.be.exactly('pos 0')
        list.tail().should.be.exactly('pos 1')
    });
    it('Get node at index', () => {
        const list = new LinkedList();
        list.append('v1')
        list.append('v2')
    });
    it('Make sure the head and tail point correctly when adding node', () => {
        const list = new LinkedList();
        list.append('v1');
        list.append('v2');
        list.append('v3');
        list.get(0).should.be.exactly('v1');
        list.get(1).should.be.exactly('v2');
        list.length().should.be.exactly(3);
        list.head().should.be.exactly('v1');
        list.tail().should.be.exactly('v3');
        list.remove(0)
        list.head().should.be.exactly('v2');
        list.tail().should.be.exactly('v3');
    });
    it('Remove node at index', () => {
        const list = new LinkedList();
        list.append(1)
        list.append(2)
        list.append(3)
        list.append(4)
        list.remove(1)
        list.length().should.be.exactly(3);
        list.get(0).should.be.exactly(1);
        list.get(1).should.be.exactly(3);
        list.get(2).should.be.exactly(4);

    });
    it('Check list length', () => {
        const list = new LinkedList();
        list.append(1)
        list.append(2)
        list.remove(1)
        list.length().should.be.exactly(1);

    });
    it('Remove first node in list', () => {
        const list = new LinkedList();
        list.append(1)
        list.head().should.be.exactly(1);
        list.tail().should.be.exactly(1);
        list.length().should.be.exactly(1);
        list.append(2)
        list.head().should.be.exactly(1);
        list.tail().should.be.exactly(2);
        list.length().should.be.exactly(2);
        list.removeFirst()

    });
    it('Insert data at index', () => {
        const list = new LinkedList();
        list.append('v1')
        list.append('v2')
        list.append('v3')
        list.insert('newData',2)

    });
    it('Remove last node in list', () => {
      const list = new LinkedList();
      should.equal(list.head(), null);
      should.equal(list.tail(), null);
      list.append('d1')
      list.append('d2')
      list.length().should.be.exactly(2);
      list.remove(1)
      should.equal(list.head(), 'd1');
      should.equal(list.tail(), 'd1');
      list.remove(0)
      should.equal(list.head(), null);
      should.equal(list.tail(), null);

    });
    it('Append one element', () => {
      const list = new LinkedList();
      list.length().should.be.exactly(0);
      list.append('value')
      list.length().should.be.exactly(1);

    });
    it('Iterate list', ()=> {
      const list = new LinkedList();
      list.append('v1')
      list.append('v2')
      list.append('v3')
      list.append('v4')
      list.length().should.be.exactly(4);

      arr = [];
      for (let value of list) {
        arr.push(value)
      }
      arr.length.should.be.exactly(4);
      arr[0].should.be.exactly('v1');
      arr[1].should.be.exactly('v2');
      arr[2].should.be.exactly('v3');
      arr[3].should.be.exactly('v4');
    });
  });


