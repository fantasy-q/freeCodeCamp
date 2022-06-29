class Node {
  constructor (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head
  }

  add(data) {
    const node = new Node(data, this.tail)
    this.isEmpty() ?
      this.head = node :
      this.tail.next = node
    this.tail = node
  }

  remove(data) {
    let curr = this.head

    while (curr && curr.data !== data) {
      curr = curr.next
    }

    if (curr) {
      if (curr === this.head) {
        this.head = this.head.next
        this.isEmpty() ?
          this.tail = null :
          this.head.prev = null
      } else {
        curr.prev.next = curr.next
        curr.next ?
          curr.next.prev = curr.prev :
          this.tail = curr.prev
      }
      return curr.data
    } else {
      return null
    }
  }

  print() {
    const list = []
    let curr = this.head
    while (curr) {
      const prev = curr.prev ? curr.prev.data : '□'
      const next = curr.next ? curr.next.data : '□'
      list.push(`${prev} ← ${curr.data} → ${next}`)
      curr = curr.next
    }
    list.map(v => console.log(v))
    console.log('head → ' + this.head.data);
    console.log('tail → ' + this.tail.data);
  }
};

const dll = new DoublyLinkedList()

dll.add('a')
dll.add('b')
dll.add('c')
dll.add('d')

// dll.remove('a')
// dll.remove('b')
// dll.remove('c')
// dll.remove('d')

dll.print()


