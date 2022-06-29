var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.findMinHeight = function () {
    function findNodeMinHeight(node) {
      return node ? 1 + Math.min(
        findNodeMinHeight(node.left),
        findNodeMinHeight(node.right)
      ) : 0
    }
    return (!this.root) ? -1 :
      findNodeMinHeight(this.root) - 1
  }

  this.findMaxHeight = function () {
    function findNodeMaxHeight(node) {
      return node ? 1 + Math.max(
        findNodeMaxHeight(node.left),
        findNodeMaxHeight(node.right)
      ) : 0
    }
    return (!this.root) ? -1 :
      findNodeMaxHeight(this.root) - 1
  }

  this.isBalanced = () => {
    return this.findMinHeight()
      === this.findMaxHeight();
  }
}
