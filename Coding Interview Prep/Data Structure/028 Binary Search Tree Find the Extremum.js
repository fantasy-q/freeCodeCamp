var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMin = () => {
    let min = this.root || new Node(null)
    while (min.left) { min = min.left }
    return min.value
  }

  this.findMax = () => {
    let max = this.root || new Node(null)
    while (max.right) { max = max.right }
    return max.value
  }
}

