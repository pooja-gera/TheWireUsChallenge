class Node {
    constructor(data){
        this.data = data;
        this.left =  null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(data) {
        var n = new Node(data, null, null);
        if (this.root == null) {      //if root is null means our data is the first node to be inserted.
        this.root = n;
        }

        else {                      // if there are other nodes are already present in our BST
        var current = this.root;    // put root in current
        var parent;
        while (true) {             // loop will run while we don't reach on a leaf node where the element can be added
        parent = current;           
        if (data < current.data) {          // Check if incoming data is less than present data on node
        current = current.left;            // if true then move to your left node 
        if (current == null) {             // if the node is null then add your coming data there
        parent.left = n;
        break;
        }
        }
        else {                        // if not in left node then the towards right side
        current = current.right;      // repeat above wxplanation for right side node
        if (current == null) {
        parent.right = n;
        break;
        }
        }
        }
        }
       }

       
       display(node){
        if (node == null) {
            return;
          }
      
          let str = "";
          str += node.left == null ? "." : node.left.data + "";
          str += " <- " + node.data + " -> ";
          str += node.right == null ? "." : node.right.data + "";
          print(str);
      
          this.display(node.left);
          this.display(node.right);
       }
       
       
       inOrder(node){
        if(node !== null) 
        { 
            this.inOrder(node.left);      
            console.log(node.data); 
            this.inOrder(node.right); 
        } 
       }

       // getMin fucntion ----
       getMin(){
        var curr = this.root;
            while (!(curr.left == null)) {
            curr = curr.left;
            }
            return curr.data;
        }

        // getMax function - - ----
        getMax() {
            var curr = this.root;
            while (!(curr.right == null)) {
            curr = curr.right;
            }
            return curr.data;
           }
           
        //Searching for a element in the tree
        find(data){
            return this.findHelper(this.root,data);
        }
        
        findHelper(node,data){
            if(node==null){
                return false;
            }
            if(node.data == data){
                return true;
            }
            let ln = false;
            let rn = false;
            if(node.data < data){
                rn = this.findHelper(node.right,data);
            } else {
                ln = this.findHelper(node.left,data);
            }
            
            return ln||rn;
        }

        pairPrintHelper(root,node,tar){
            if(node==null){
                return;
            }

            this.pairPrintHelper(root,node.left,tar);

            let diff = tar - node.data;
            if(node.data < diff){
                if(this.find(diff) == true){
                    print(node.data +" "+ diff);
                }
            }
            this.pairPrintHelper(root,node.right,tar);
        }

        pairPrint(tar){
            this.pairPrintHelper(this.root,this.root,tar);
        }

        
        
    }

    var tree = new BST();
tree.insert(50);
tree.insert(25);
tree.insert(12);
tree.insert(37);
tree.insert(30);
tree.insert(75);
tree.insert(62);
tree.insert(60);
tree.insert(70);
tree.insert(87);

tree.display(tree.root);
print("Pairs are - ");
tree.pairPrint(100);