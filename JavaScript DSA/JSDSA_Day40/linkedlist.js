function usingFlag(head) {
    if (!head || !head.next) 
        return false;
    let current = head;
    
    // iterate through the list
    while(current) {
        // if a node that has been already marked as visited is visted again
        if(current.hasVisited)
            // then there is a cycle
            return true;
        // if the node is visited for the first time, mark it as visited and iterate
        current.hasVisited = true;
        current = current.next;
    }
    return false;
}


function usingTwoPointers(head) {
    var fast = head;
    var slow = head;
    // this loop will keep running until fast pointer reaches the end and there
    // no cycle or until fast pointer meets the slow pointer
    while (fast && fast.next) {
        // fast pointer will move twice ahead of the slow pointer
        fast = fast.next.next;
        // slow pointer only moves one step
        slow = slow.next;
        if (fast == slow) {
            // if they meet; then there is a cycle 
            return true;
        }
    }
    
    return false;
}