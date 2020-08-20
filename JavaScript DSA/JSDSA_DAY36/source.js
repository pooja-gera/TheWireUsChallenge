function List(){
    //Initialize the list
    this.listSize = 0;
    this.pos = 0;
    this.items = [];
    this.append = append;   
    this.find = find;
    this.remove = remove;
    this.insert = insert;
    this.contains = contains;
    this.front = front;
    this.rear = rear;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.size = size;
    this.clear = clear;
    this.getElement = getElement;
    this.display = display;

    // Add the element in the list
    function append(ele) {
        this.items[this.listSize++] = ele;
    }   
       
    //Find item from the list
    function find (element) {
      for(let i = 0; i < this.listSize; i++){
        if(this.items[i] === element){
          return i;
        }
      }  
      return -1;
    }
  
    //Remove item from the list
    function remove(element) {
      let index = this.find(element);
      
      if(index > -1){
        this.items.splice(index, 1);
        --this.listSize;
        return true;
      }
      
      return false;
    }
       
    //Insert items at specific position in the list
    function insert (element, after) {
      let insertPos = this.find(after);
      
      if(insertPos > -1){
         this.items.splice(insertPos+1, 0, element);  
         ++this.listSize;
        return true;
      }
      
      return false;
    }
        
    //Check if item is present in the list
    function contains (element) {
      let index = this.find(element);
      return index > -1 ? true : false;
    }
        
    //Move to the front of the list
    function front ()  {
      this.pos = 0;
    }
       
    //Move to the end of the list
    function rear (){
      this.pos = this.listSize - 1;
    }
       
    //Move to the prev item in the list
    function prev () {
      if(this.pos > 0){
        --this.pos;
      }
    }
  
    //Move to the next item in the list
    function next () {
      if(this.pos < this.listSize - 1){
        ++this.pos;
      }
    }
        
    //Get the current position in the list
    function currPos () {
      return this.pos;
    }
        
       
    //Get current item from the list
    function getElement () {
      return this.items[this.pos];
    }
  
    //Get the size list
    function size () {
      return this.listSize;
    }
       
  
    //Clear the list
    function clear () {
      this.listSize = 0;
      this.pos = 0;
      this.items = [];
    }

    // Display the elements of List in form of String
    function display() {
        this.items.join(" , ");
    }

  }

