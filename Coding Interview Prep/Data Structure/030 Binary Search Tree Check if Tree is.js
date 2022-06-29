function isBinarySearchTree(tree) {
  function isBadBranch(node, branch) {
    if (!node[branch]) return false
    // branch is bad if
    // 1) node values are out of order
    else return (branch === "left" ?
      (node.value <= node.left.value) :
      (node.value >= node.right.value)
    ) || !isGoodTree(node[branch])
    // OR 2) the sub-tree in that branch is bad
  }
  function isGoodTree(node) {
    if (isBadBranch(node, "left")) return false
    if (isBadBranch(node, "right")) return false
    return true
  }
  return tree.root ?
    isGoodTree(tree.root) : true;
}
