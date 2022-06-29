class Set {
  constructor () {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }
    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // Only change code below this line
  union(set) {
    const unionedSet = new Set()
    this.values().map(v => unionedSet.add(v))
    set.values().map(v => unionedSet.add(v))
    return unionedSet
  }
  // Only change code above this line
}

const setA = new Set()
const setB = new Set()

setA.add('a')
setA.add('b')
setA.add('c')

setB.add('a')
setB.add('b')
setB.add('d')
setB.add('e')

console.log(
  setA.values(),
  setA.union(setB)
);
