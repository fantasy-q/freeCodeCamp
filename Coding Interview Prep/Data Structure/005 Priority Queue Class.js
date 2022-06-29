class PriorityQueue {
  constructor () {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  };
  enqueue(item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }
  dequeue() {
    return this.collection.shift()[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  front() {
    return this.collection[0][0];
  }
}


const q = new PriorityQueue()

q.enqueue(['kitten', 2])
q.enqueue(['human', 1])
q.enqueue(['dog', 2])
q.print()
console.log(
  q.dequeue()
);

