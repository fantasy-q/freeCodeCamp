class LinkedList {
  constructor () {
    this.length = 0;
    this.headNode = null;
    this.Node = class Node {
      constructor (element) {
        this.element = element;
        this.next = null;
      }
    };
  }

  head() {
    return this.headNode;
  };

  size() {
    return this.length;
  };

  add(element) {
    const node = new this.Node(element)
    if (this.headNode) {
      let current = this.headNode;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.headNode = node
    }
    this.length++
  };

  remove(element) {
    // remove head
    let removed = null
    if (this.headNode.element === element) {
      removed = this.headNode
      this.headNode = this.headNode.next;
      this.length--
    } else {
      let previous = this.headNode;
      while (previous) {
        let remove = previous.next;
        if (remove) {
          if (remove.element === element) {
            removed = previous.next
            previous.next = remove.next;
            this.length--
          }
        }
        previous = remove;
      }
    }
    return removed.element
  }

  isEmpty() {
    return !this.length
  }

  indexOf(element) {
    let current = this.headNode
    let count = 0
    while (
      current !== null &&
      current.element !== element
    ) {
      current = current.next
      count++
    }
    return count < this.length ? count : -1
  }

  nodeAt(index) {
    if (0 <= index && index < this.length) {
      let current = this.headNode
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    } else if (index === this.length) {
      return null
    } else {
      return undefined
    }
  }

  elementAt(index) {
    const node = this.nodeAt(index)
    return node ? node.element : null
  }

  addAt(index, element) {
    const newNode = new this.Node(element)
    const node = this.nodeAt(index)
    if (node) {
      if (this.headNode === node) {
        newNode.next = this.headNode
        this.headNode = newNode
      } else {
        const previousNode = this.nodeAt(index - 1)
        newNode.next = previousNode.next
        previousNode.next = newNode
      }
    } else if (node === null) {
      const lastNode = this.nodeAt(index - 1)
      lastNode.next = newNode
    } else {
      return false
    }
    return this.length++
  }

  removeAt(index) {
    const element = this.elementAt(index)
    return element ? this.remove(element) : null
  }

}

const ll = new LinkedList()

ll.add('00')
ll.add('03')


// console.log(ll);
console.log(
  // ll.elementAt(2),
  // ll.removeAt(),
  ll.addAt(2, 'a'),
  ll.head(),
);
