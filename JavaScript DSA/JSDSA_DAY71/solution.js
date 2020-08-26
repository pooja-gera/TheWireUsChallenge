
IMPLEMENTATION:
var rotateRight = function(head, k) {
    if(!head) return null;// If the list is empty...
    //Make Linked List to cycle
    let node = head;
    let count = 1;
    while(node.next) {
        count+=1;
        node=node.next
    }
    node.next=head;
    
    //Make node as head.
    node=node.next;
    //1. Find new tail, 2. Make tail's next as null, 3. Return new head (which is tmp)
    for(var i=0; i<count-k%count-1; i++) {
        node=node.next;
    }
    let tmp = node.next;
    node.next=null;
    return tmp;
};