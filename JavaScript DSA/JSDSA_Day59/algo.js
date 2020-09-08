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

var root = BST.getRoot();
BST.inorderTraversal(root);