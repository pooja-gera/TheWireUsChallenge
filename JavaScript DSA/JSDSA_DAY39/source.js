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

var str = readline();


balancedBracket(str);

function balancedBracket(str){

    let st = new CustomStack();  // we have made a new stack using our CustomStack class
        
    for(let i=0;i<str.length;i++){                      // pushing each opening brackets into the stack
        if(str[i]=='(' || str[i]=='['||str[i]=='{'){
            st.push(str[i]);
        } 

        if(str[i]==')' || str[i]==']'||str[i]=='}'){     // checking if any closing bracket matches the opening baracket present on top
                                                         // of our stack           
            if(st.size()==0){      // for the case when closing brackets are more than opening brackets                     
                print(false);
                return;
            }
            
            if(st.top()==')'){                           
                st.pop();
            } else if(st.top()==']'){               // if the closing bracket matches the opening bracket pop the opening bracket from the stack
                st.pop();
            } else{
                st.pop();
            }
        }

    }
    if(st.size()==0){                  // at the end if the stack is empty that means brackets are balanced
        print(true);
    }
    else
    print("false");

}