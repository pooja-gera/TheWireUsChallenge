let bfs = (graph, root) => {
    let nodesLen = {};
  
    for(let i = 0; i < graph.length; i++){
      nodesLen[i] = Infinity; // Indicates that a node is not reachable from the start node
    }
    nodesLen[root] = 0; // The distance of the root node from the root node is set to 0
  
    let queue = [root]; // Keep track of nodes we visit
    let current; // Keep track of the current node we are traversing
  
    // This loop will keep traversing nodes in the queue until we have no other node to traverse
    while(queue.length){
      current  = queue.shift(); // Removes the first element in the array
  
      let curConnected = graph[current]; // We get all the nodes connected to the current node
      let neighborIdx = [];
      let idx = curConnected.indexOf(1); // Gets the index of the first node connected to the current node because the number one in our array shows that the node is connected to anothe node on that index
  
      // If there is no node at the index of one, the index variable will be set to -1. 
      while(idx != -1){
        neighborIdx.push(idx); // So while index does not equals to -1, push our index onto our list of neighbors.
        idx = curConnected.indexOf(1, idx + 1); // This line searches for the next connected node.
      }
  
      // Now that we know all the nodes connected to the current node, we loop through this connected nodes, and get the distance
      for ( let j = 0; j < neighborIdx.length; j++){
        if (nodesLen[neighborIdx[j]] == Infinity){ // This line we haven't set the distance from the nodesLen[neighborIdx[j]] yet so we will set now. 
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]) // We push the neighbor to the queue so the next time we go through the while loop, we will check the neighbors of that node too.
        }
      }
    }
  
    return nodesLen;
  }
  
  let exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
  ];
  
  result = bfs(exBFSGraph, 1);
  console.log(result);
