const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  add(value) {
    const node = new Node(value)
    if (this.root) {
      let curr = this.root
      while (curr) {
        const branch = node.value < curr.value ?
          'left' : 'right'
        if (node.value === curr.value) return null
        else if (curr[branch]) curr = curr[branch]
        else {
          curr[branch] = node
          curr = null
        }
      }
    } else { this.root = node }
  }
}

const bst = new BinarySearchTree()

console.log(
  bst.add(8),
  bst.add(4),
  bst.add(11),
  bst.add(3),
  bst.add(11),
);

// displayTree(bst)
