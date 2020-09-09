
IMPLEMENTATION:

function LCABinarySearchTree(Node root, int n1, int n2){
	if(root.data > n1 && root.key > n2){
		return LCABinarySearchTree(root.left, n1, n2);
	} 
	else if(root.data < n1 && root.key < n2){
		return LCABinarySearchTree(root.right, n1, n2);
	}
	else{
		return root;
	}
}