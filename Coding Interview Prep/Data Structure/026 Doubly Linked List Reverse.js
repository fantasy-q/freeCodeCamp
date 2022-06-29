var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.reverse = () => {
    let curr = this.tail
    this.tail = this.head
    this.head = curr
    while (curr) {
      const temp = curr.prev
      curr.prev = curr.next
      curr.next = temp
      curr = curr.next
    }
    return this.head
  }
};
