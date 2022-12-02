/**
 * tree test script
 */
var {BinarySearchTree} = require('./tree');

var binarySearchTree =  new BinarySearchTree()

binarySearchTree.insert(11)
binarySearchTree.insert(7)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(8)
binarySearchTree.insert(10)
binarySearchTree.insert(13)
binarySearchTree.insert(12)
binarySearchTree.insert(14)
binarySearchTree.insert(20)
binarySearchTree.insert(18)
binarySearchTree.insert(25)
binarySearchTree.insert(6)

// binarySearchTree.inOrderTraverse(function(val){
//     console.log('中序',val)
// })
// binarySearchTree.preOrderTraverse(function(val){
//     console.log('先序',val)
// })
// binarySearchTree.postOrderTraverse(function(val){
//     console.log('后序',val)
// })
// console.log(binarySearchTree.max())
// console.log(binarySearchTree.min())
console.log(binarySearchTree.search(11))
binarySearchTree.remove(12)
console.log(binarySearchTree.search(11))

binarySearchTree.inOrderTraverse(function(val){
    console.log('中序',val)
})