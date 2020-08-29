// Implementation of Generic Tree

function treeNode(val){   // A function to make nodes which contains a value and an array of childrens
    this.val = val;
    this.children = [];
}

function genericTree(data){   // generic tree constructor
    this.construct = construct;
    this.display = display;
    this.size = size;
    this.root = construct(data);    // root node uses contruct method
    this.max = max;
    this.traversals  = traversals;
}

var idx =0;                  // index to traverse through given array

function construct(data){     // COnstruct a generic tree and return root node
    let node  = new treeNode(data[idx]);  // make a root node
    idx++;

    while(data[idx]!=-1){       // while there are children run the loop
        let child = construct(data);     // let each child make their own generic tree
        node.children.push(child);    // add the child's node in himself
    }
    idx++;
    return node;     // return node
}

function displayHelper(node){
    let str = "";
    
    str = str+ node.val + " -> ";         // Print  your own data

    for(let i=0;i<node.children.length;i++){
        str+=node.children[i].val+",";             // print your Children's names
    }
    print(str+".");
        for(let i=0;i<node.children.length;i++){
            displayHelper(node.children[i]);             // Now ask your childrens to go and print themselves and their childrens
        }
}

function display(){
    displayHelper(this.root);      // Calls displayHelper with root node as parameter
}

function sizeHelper(node){
    let mySize = 1;
    for(let i=0;i<node.children.length;i++){
        mySize+=sizeHelper(node.children[i]);  // tells all of their child's to bring their size and add them all
    }
    return mySize;
}


function size(){
    return sizeHelper(this.root);
}

 function maxHelper(node){
    let ans =node.val;     // Stores his own value
    for(let i=0;i<node.children.length;i++){
        let cmp = maxHelper(node.children[i]);   // asks his own children to come up with their max value 
        if(cmp>ans){              // Compare 
            ans = cmp;
        }
    }
    return ans;
}

function max(){
    return maxHelper(this.root);
}


function traversalHelper(node){
    print("Node Pre " + node.val);
    for(let i=0;i<node.children.length;i++){
        let child  = new treeNode(node.children[i].val);
        print("Edge Pre " +node.val +"--"+child.val);
        traversalHelper(child);
        print("Node Post " + child.val);
        print("Edge Post " + node.val + "--" + child.val);
    }
}

function traversals() {
    traversalHelper(this.root);
}


var n = Number(readline());
var arr= [];
var s = readline();
arr = s.split(" ");

var gt = new genericTree(arr);

print(gt.max());
gt.traversals();