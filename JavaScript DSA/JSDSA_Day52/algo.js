// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

function dfs(start, visited = new Set()) {
    // add the starting node to the queue
    visited.add(start);

    const destinations = adjacencyList.get(start);

    // loop for all elements in the array
    for (const destination of destinations) {

        // if the destination is reached, return
        if (destination === 'BKK') { 
            console.log(`DFS found Bangkok`)
            return;
        }
        
        // loop until there are no children/ neighbors for that element
        if (!visited.has(destination)) {
            // implemented recursively to keep track of previously visited nodes
            dfs(destination, visited);
        }

    }

}

dfs('PHX')