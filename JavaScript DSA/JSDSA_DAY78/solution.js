
IMPLEMENTATION:

function LCA(Node root, int n1, int n2){
	if(root == null){
            return null;
        } //If Binary Tree is Empty then return null

        if(root.data == n1 || root.data == n2){
            return root;
        }//Return the root if it matches with any of the n1 or n2 during the recursion
        
     //Check for the same in Left and right subtree	
	Node left = LCA(root.left, n1, n2);
        Node right = LCA(root.right, n1, n2);
        
        if(left != null && right != null){
            return root;
        }
        if(left == null && right == null){
            return null;
        }
        
        return left!=null ? left : right;
}