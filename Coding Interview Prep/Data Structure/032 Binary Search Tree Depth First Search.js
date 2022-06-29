var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.inorder = () => {
    return this.explore('in')
  }
  this.preorder = () => {
    return this.explore('pre')
  }
  this.postorder = () => {
    return this.explore('post')
  }

  this.explore = (order) => {
    if (!this.root) return null
    const traversal = []
    const Order = {
      pre(value) { },
      in(value) { },
      post(value) { },
    }
    Order[order] = (value) => traversal.push(value)
    function traverse(node) {
      Order.pre(node.value)
      if (node.left) traverse(node.left)
      Order.in(node.value)
      if (node.right) traverse(node.right)
      Order.post(node.value)
    }
    traverse(this.root)
    return traversal
  }
}
