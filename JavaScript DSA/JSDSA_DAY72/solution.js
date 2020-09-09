function lengthOfLoop(head) {
    var fast = head;
    var slow = head;
    var flag = 0;	
    // this loop will keep running until fast pointer reaches the end and there
    // no cycle or until fast pointer meets the slow pointer
    while (fast && fast.next) {
        // fast pointer will move twice ahead of the slow pointer
        fast = fast.next.next;
        // slow pointer only moves one step
        slow = slow.next;
        if (fast == slow) {
            // if they meet; then there is a cycle 
            flag = 1;
	    break; 
        }
    }
    if(flag == 1){
            var count=0;
            while(slow_p.next != fast_p){
                count++;
                slow_p = slow_p.next;
            }
            return count+1;
        }
    return 0;
}