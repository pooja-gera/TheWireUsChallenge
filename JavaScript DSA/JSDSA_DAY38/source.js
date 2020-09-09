  class CustomStack {

    // Initialize the array to work as a storage for our stack.
    constructor() {
        this.data = [];
        this.tos = -1; // acts as a pointer for the top element of our stack
      }
    
      // Returns size of stack
       size() {
        return this.tos +1;
      }
      
      // prints all the elements of stack
       display() {
           let s = "";
        for(let i = 0;i<this.tos+1;i++)
        {
            s+=this.data[i]+" ";
        }
        print("The elements of stack are - " + s);
      }
      
      // adds the element into our stack
       push(val) {
           this.tos = this.tos + 1;
        this.data[this.tos] = val;
      }
      
      // removes the top element from our stack
       pop() {
        this.data[this.tos] = 0;  // makes the top element 0
        return this.data[this.tos--]; // it simply moves the tos to point on the previous element 
      }
      
      // return the element present at the top of our stack
       top() {
        return this.data[this.tos];
      }
    }

    var st = new CustomStack();
    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.display();
    print(st.size());
    st.pop();
    st.pop();
    print(st.size())
    print(st.top());
    st.display();
  