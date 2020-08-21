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
           let rv = this.data[this.tos];
        this.data[this.tos] = 0;
        this.tos--;  // makes the top element 0
        return rv; // it simply moves the tos to point on the previous element 
      }
      
      // return the element present at the top of our stack
       top() {
        return this.data[this.tos];
      }
    }

var n = readline();
var s = readline();
var arr1 = s.split(" ");
var ans = nge(arr1);
let z = "";
for(let i=0;i<n;i++){
    z+=ans[i]+" ";
}
print(z);







function nge(arr){
    
    let st= new CustomStack();
    let ans = [];              // array in which we will store our next greater elements
    ans[arr.length - 1] = -1;      // the value of last index will always be -1
    st.push(arr[arr.length - 1]);  // pushing  the last value in our stack

    for(let i = arr.length - 2; i >= 0; i--){     // Starting the loop from the second last element of our array
      
        // if the present element of array is grater than the element present on top of stack then pop from stack
        while(st.size() > 0 && (parseInt(arr[i]) > parseInt(st.top()))) {   
           st.pop();                                                                    
      }     
      if(st.size() > 0){
        ans[i] = st.top();
      } else {
        ans[i] = -1;
      }
      
      st.push(arr[i]);
    }

    return ans;   
 }
