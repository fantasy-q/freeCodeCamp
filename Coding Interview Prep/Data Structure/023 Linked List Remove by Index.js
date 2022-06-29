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

  elementAt(index) {
    let current = this.headNode
    let count = 0
    if (index < this.length) {
      while (count < index) {
        current = current.next
        count++
      }
      return current.element
    } else {
      return undefined
    }
  }

  removeAt(index) {
    if (index < 0) {
      return null
    } else {
      const element = this.elementAt(index)
      return element ? this.remove(element) : null
    }
  }
}

const ll = new LinkedList()

ll.add('00')
ll.add('03')
// ll.add('02')
// ll.add('01')

// console.log(ll);
console.log(
  ll.removeAt(9),
  // ll.head(),
);
