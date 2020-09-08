class Node {
    constructor(value){
        // value of the node
        this.value = value;
        // pointer to the left child
        this.left = null;
        // pointer to the right child
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        // root of the bst
        this.root = null;
    }

    // adding a node to the bst
    add(value){
        // create and initialize a node
        var newNode = new Node(value);

        // if it is the first node, then it will be root
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    // insert the node in the right position
    insertNode(node, newNode){
        // if the value of the new node is less than root
        // then check with the left child of root (since it is smaller than root)
        if (newNode.value < node.value){
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        
        // if the value of the new node is greater than or equal to root
        // then check with the right child of root (since it is greater than or equal to root)
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    // returns the root of the tree
    getRoot() {
        return this.root;
    }

    // traverse left subtree, root and then the right subtree
    inorderTraversal(node){
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // finds minimum in the tree starting from a given node
    findMinNode(node) {
        // since this is a bst, minimum is in the left subtree
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    // helper function for deleting a node
    delete(value) {
        // root is re-initialized
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        // if root is null, then tree is empty
        if (node === null)
            return null;
        
        // if value to be deleted is less than the value at root,
        // then check in the left subtree
        else if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }

        // if value to be deleted is greater than the value at root,
        // then check in the right subtree
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        }

        // if the value is equal to the value at root,
        // then remove the root
        else {
            // deleting node with no children
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            // deleting node with one child
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // deleting node with two children
            var aux = this.findMinNode(node.right);
            node.value = aux.value;

            node.right = this.deleteNode(node.right, aux.value);
            return node;
        }
    }
}

var BST = new BinarySearchTree();
BST.add(10);
BST.add(12);
BST.add(6);
BST.add(4);
BST.add(14);
BST.add(8);
BST.add(16);

//      10
//     /  \ 
//    6    12
//   / \     \
//  4   8     14
//             \
//             16

console.log("Before deletion: ");
var root = BST.getRoot();
BST.inorderTraversal(root);

BST.delete(12);

console.log("\n After deletion: ");
BST.inorderTraversal(root);