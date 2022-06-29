var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.levelOrder = () => {
    return this.breadth('left2right')
  }

  this.reverseLevelOrder = () => {
    return this.breadth('right2left')
  }

  this.breadth = (order) => {
    if (!this.root) return null
    const [first, last] = [
      order.split(2)[0],
      order.split(2)[1]
    ]
    const queue = [this.root]
    const traversal = []
    function traverse() {
      const node = queue.shift()
      traversal.push(node.value)
      if (node[first]) { queue.push(node[first]) }
      if (node[last]) { queue.push(node[last]) }
    }
    while (queue.length) { traverse() }
    return traversal
  }
}
