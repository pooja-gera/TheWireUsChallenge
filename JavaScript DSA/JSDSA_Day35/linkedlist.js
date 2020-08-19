// to create each node in a linked list with the value of the element
// and the pointer to the next element
class Node {
    constructor(element){
        this.element = element; // value of the node (data)
        this.next = null; // pointer to the next node
    }
}


class LinkedList {
    // initialize a linked list
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // add element to the list
    addNode(element){
        // create a new node with value in element
        var node = new Node(element);
        var current;

        // if the list is empty, then add an element and make it 'head'
        if (this.head == null)
            this.head = node;

        // if list is not empty
        else{
            current = this.head;

            // iterate through the list (till the end of the list)
            while(current.next)
                // iterate (update current node to be next node)
                current = current.next;

            // once you've reached the end of the list, you
            // can add the node to the next of the current node
            current.next = node;
        }
        
        // increase the size of the linked list
        this.size++;
    }

    // prints the contents of the list
    printList(){
        // initialize current as the head node of the list
        var current = this.head;
        // empty string
        var string = "";
        
        // iterating through the list (till the end of the list)
        while(current){
            // append the value of current element to the string
            string += current.element + " ";
            current = current.next;
        }
        console.log(string);
    }

    findLength(){
        console.log("\nSize of the linked list: ");
        console.log(this.size);
        return this.size;
    }
}

// first iterate through the whole list and find the length
// then iterate until half the length using a position variable to
// keep track of the index
function findMiddle(linkedlist) {
    // initialize current as head of the linked list
    var current = linkedlist.head;
    var length = linkedlist.findLength();
    var position = 0;

    // iterate through the list
    while(current.next){
        // check if position is less than or equal to half of the length
        if (position <= Math.floor(length % 2)){
            current = current.next;
            // if yes, increment position
            position++;
        }
        // if position is greater than half the length, terminate the loop
        else
            break;
    }
    console.log("\nMiddle element (naive method): " + current.element);
}


// using two pointers, one which moves twice as fast as the other
// so when fast pointer reaches the end, the slow pointer will be in
// the middle of the list
function findMiddleFaster(linkedlist) {
    // initialize both the pointers as head
    var slowPointer = linkedlist.head;
    var fastPointer = linkedlist.head;
    
    while (fastPointer.next && fastPointer.next.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    console.log("Middle element (two pointer): " + slowPointer.element);
}


var linkedlist = new LinkedList();
linkedlist.addNode(1);
linkedlist.addNode(3);
linkedlist.addNode(2);
linkedlist.addNode(5);
linkedlist.addNode(9);

console.log("Linked list: ");
linkedlist.printList();

findMiddle(linkedlist);

findMiddleFaster(linkedlist);
