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

    // reverse a linked list (iteratively)
    reverseIterative(){
        // initialize three pointers previous, current and next
        // as null, head and null respectively
        var previous = null;
        var current = this.head;
        var next = null;
        
        // iterate through the linked list
        while(current){
            // before changing next of current, store next
            next = current.next;
            // now change next of current
            current.next = previous;
            // move previous and current one step forward
            previous = current;
            current = next;
        }
        this.head = previous;
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


var linkedlist = new LinkedList();
linkedlist.addNode(1);
linkedlist.addNode(3);
linkedlist.addNode(2);
linkedlist.addNode(5);
linkedlist.addNode(9);

console.log("Linked list: ");
linkedlist.printList();

console.log("\nReversed list (iteration): ");
linkedlist.reverseIterative();
linkedlist.printList();