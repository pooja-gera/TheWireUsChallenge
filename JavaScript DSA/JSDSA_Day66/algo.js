class MaxHeap {
    constructor() {
      // initialize the array
      this.values = [];
    }
    add(element) {
      // add a new element to the end of the array  
      this.values.push(element);
      // bubble up
      let index = this.values.length - 1;
      const current = this.values[index];
        
      // finding the correct position for the new element
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];

        // swapping the nodes
        if (parent <= current) {
          this.values[parentIndex] = current;
          this.values[index] = parent;
          index = parentIndex;
        } else break;
      }
    }
  }
  
  const tree = new MaxHeap();
  tree.add(9);
  tree.add(12);
  tree.add(6);
  tree.add(1);
  tree.add(10);
  tree.add(8);
  console.log(tree);