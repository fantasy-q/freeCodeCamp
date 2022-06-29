class LinkedList {
  constructor() {
    this.length = 0;
    this.headNode = null;
    this.Node = class Node {
      constructor(element) {
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
    if (this.headNode.element === element) {
      this.headNode = this.headNode.next;
      return this.length--
    }
    let previous = this.headNode;
    while (previous) {
      let remove = previous.next;
      if (remove) {
        if (remove.element === element) {
          previous.next = remove.next;
          return this.length--
        }
      }
      previous = remove;
    }
  }
}


const ll = new LinkedList()

ll.add('00')
ll.add('01')
ll.add('02')
ll.add('03')
ll.remove('01')
ll.remove('02')
// ll.remove('03')

// console.log(ll);
console.log(
  ll.head(),
  // ll.size()
  // ll
);
