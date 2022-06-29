class HashTable {
  constructor () {
    this.collection = {};
    this.called = 0;
    this.size = 0
  }
  _hash = string => {
    this.called++;
    let hashed = 0;
    for (let i = 0; i < string.length; i++) {
      hashed += string.charCodeAt(i);
    }
    return hashed % 128;
  };

  // Only change code below line
  set(key, value) {
    const hashedKey = this._hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = this.collection[hashedKey][key] + value || value;
    this.size++
  }

  get(key) {
    const hashedKey = this._hash(key);
    return this.collection[hashedKey] !== undefined ?
      this.collection[hashedKey][key] : null
  }

  remove(key) {
    const hashedKey = this._hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
    this.size--
  }

  print() {
    console.log(this.collection, this.called);
  }
  // Only change code above line
};

const ht = new HashTable()
const fs = require('fs')
const path = './freecodecamp/Coding Interview Prep/Data Structure/016.md'
const text = fs.readFileSync(path, "utf-8")
text.split(/\W+/).map(v => ht.set(v, 1))

ht.print()

console.log(
  ht.get('the')
);




