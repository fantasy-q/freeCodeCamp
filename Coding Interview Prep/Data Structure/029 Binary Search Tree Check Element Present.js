var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.isPresent = (value) => {
    let curr = this.root
    while (curr && curr.value !== value) {
      if (value < curr.value) curr = curr.left
      else curr = curr.right
    }
    return !!curr
  }
}
