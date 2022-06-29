class CircularQueue {
  constructor (size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    console.log(this.queue, this.write, this.read);
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item
      this.write = this.write % (this.max + 1)
      return item
    } else {
      // console.log('enqueue null');
      return null
    }
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    const dequeue = this.queue[this.read]
    if (dequeue !== null) {
      this.queue[this.read++] = null
      this.read = this.read % (this.max + 1)
      return dequeue
    } else {
      // console.log('dequeue fail');
      return null
    }
    // Only change code above this line
  }
}

const q = new CircularQueue(3)

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

q.print()
