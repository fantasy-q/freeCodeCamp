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
    // Only change code below this line
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
    // Only change code above this line
  };
}

const ll = new LinkedList()

ll.add('00')
ll.add('01')
// ll.head()

// console.log(ll);
console.log(
  ll.head(),
  // ll.size()
);
