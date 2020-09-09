
IMPLEMENTATION:
Efficient Approach: Time Complexity: O(logn * logn)

function countNodes(Node root){
	var lh = 0, rh = 0;
	Node curr = root;
	while(curr != null){
		lh++;
		curr = curr.left;
	}
	Node curr = root;
	while(curr != null){
		rh++;
		curr = curr.right;
	}

	if(lh == rh){
		return Math.pow(2, lh) + 1;
	}
	return 1 + countNodes(root.left) + countNodes(root.right);
}