// Implementation of Queue 

class Queue {
    constructor() {
        this.dataStore = [];     // Array to store the elemens of queue   
        this.sizeQU = 0;
    }

     enqueue(element) {
         this.sizeQU++;
        this.dataStore.push(element);
       }
       
       dequeue() {
           this.sizeQU--;
        return this.dataStore.shift();
       }
       
       front() {
        return this.dataStore[0];
       }
       
       back() {
        return this.dataStore[this.dataStore.length-1];
       }
       
       display() {
        var Str = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
        Str += this.dataStore[i] + " ";
        }
        return Str;
       }
       size() {
           return this.sizeQU;
       }

        isEmpty() {
        if (this.dataStore.length == 0) {
        return true;
        }
        else {
        return false;
        }
}
}
    
    var n =  readline();

    var s1 = readline();

    var s2 = readline();

    print(unmatched(s1,s2));
    
    function unmatched(bride,groom){   // a function which will solve our problem
        let ans =0;
        var l1 = new Queue();    // making queue for bride
        var l2 = new Queue();      // making queue for groom
        let i=0;
        while(i<bride.length){
            l1.enqueue(bride[i]);        // adding elements in both queue
            l2.enqueue(groom[i]);
            i++;
        }
        let flag = 1;
        while(flag==1){
            let size = l1.size();
            
            if(l1.front() == l2.front()){   // if bride decides to marry the groom i.e both are either r or m
                
                l2.dequeue();
                l1.dequeue();
                size--;
            }
            else
            {                                      
                while(size!=0){
                    let rm= l2.dequeue();       // removing the groom from first
                    l2.enqueue(rm);             // adding the groom to the last in queue
                    
                    if(l1.front() == l2.front()){   // if bride is ready to marry new groom
                        size--;                     
                        break;                     // then break and move to next iteration
                    }
                    size--;                    
                }
            }
            if(size==0){
                flag = 0;
                ans = l1.size();
            }
        }
        return ans;
    }
