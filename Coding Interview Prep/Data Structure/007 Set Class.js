class Set {
  constructor () {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    console.log(Object.values(this.dictionary));
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element
      this.length++
      return true
    } else {
      return false
    }
  }
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element]
      this.length--
    }
  }
  size() {
    return this.length
  }
  // Only change code above this line
}

const set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(4)

set.values()
