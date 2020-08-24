// Implementation of Queue 

class Queue {
    constructor() {
        this.dataStore = [];      // Array to store the elemens of queue
    }

     enqueue(element) {
        this.dataStore.push(element);
       }
       
       dequeue() {
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

        isEmpty() {
        if (this.dataStore.length == 0) {
        return true;
        }
        else {
        return false;
        }
}
}

var qu = new Queue();
qu.enqueue("Grazel");
qu.enqueue("Pooja");
qu.enqueue("Agam");
print(qu.display());
qu.dequeue();
print(qu.display());
qu.enqueue("Prahitha");
print("Front of queue: " + qu.front());
print("Back of queue: " + qu.back());
print(qu.display());
print(qu.isEmpty());
