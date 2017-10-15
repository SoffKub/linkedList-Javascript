class Node {
  constructor (data) {
    this.data = data
    this.refToNextNode = null
  }
}

class LinkedList {
  constructor () {
    this._head = null
    this._tail = null
    this._length = 0
  }

  /**
   * Adding node to end of the list
   * @param {Object} data - containing any type of data in the node object
   */
  append (data) {
    const newNode = new Node(data)

    if (this._length === 0) {
      // If this is the first Node, assign it to head
      this._head = newNode
    } else {
      // If not the first node, link it to the last node
      this._tail.refToNextNode = newNode
    }

    this._tail = newNode
    this._length++
  }

  /**
   * Adding node at giving position index
   * @param {Object} data - containing any type of data in the node object
   * @param {Number} index - index in the list
   */
  insert (data, index) {
    let current = this._head
    const newNode = new Node(data)

    if (index >= this._length) {
      throw Error('index out of bounds')
    }

    for (let i = 0; i < index; i++) {
      current = current.refToNextNode
    }
    newNode.refToNextNode = current
    this._head = newNode
    this._length++
  };

  /**
   * Read a object which is on the position index
   * @param {Number} index - index in the list
   * @return list data at position index
   */
  get (index) {
    let current = this._head
    let count = 0

    // Make sure the index is in range
    while (count < index) {
      current = current.refToNextNode
      count++
    }
    return current.data

  }

  /**
   * Remove a object which is on the position index
   * @param {Number} index - index in the list
   */
  remove (index) {
    let current = this._head,
        length = this._length,
        prevNode = null

    if (index > length) {
      throw Error('index out of bounds')
    }

    if(index === 0){
      this.removeFirst()
      return;
    }

    for (let i = 0; i < index; i++) {
      prevNode = current
      current = current.refToNextNode

    }
    if(current===this._tail){
      this._tail =prevNode
    }
    prevNode.refToNextNode = current.refToNextNode
    this._length--
  }

  /**
   * Remove the first object in list
   */
  removeFirst () {
    let current = this._head

    if (current === null) {
      throw Error('index out of bounds')

    }

    this._head = this._head.refToNextNode
    this._length--

    if(this._length===0){
      this._tail = null
    }
  }

  /**
   * Implement iterable protocol
   */
  * [Symbol.iterator] () {
    let current = this._head

    while (current) {
      yield current.data
      current = current.refToNextNode
    }
  }

  /**
   *
   * @returns Number of list length
   */
  length () {
    return this._length
  }


  /**
   * @returns data from first node in list or null if list is empty
   */
  head () {
    if (this._head !== null) {
      return this._head.data
    } else
      return null
  }

  /**
   * @returns data from last node in list or null if list is empty
   */
  tail () {
    if (this._tail !== null) {
      return this._tail.data
    } else
      return null
  }
}

module.exports = LinkedList

