
IMPLEMENTATION:

const rotten = [];
  const H = grid.length;
  const W = grid[0].length;
  const cardinals = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let fresh = 0;
  let minutes = 0;
  
  // Establish the 'rotten' queue
  grid.forEach((row, r) => {
    row.forEach((col, c) => {
      if (col === 2) rotten.push([r, c, 1]);
      if (col === 1) fresh++;
    })
  });
  // Run down the rotten queue, updating each node in place
  while (rotten.length && fresh) {
    const [r, c, t] = rotten.shift();

    cardinals.forEach(([x, y]) => {
      const rd = r + y;
      const cd = c + x;

      if (rd < 0 || rd >= H || cd < 0 || cd >= W) return;
      if (grid[rd][cd] === 1) {
        grid[rd][cd] = 2;
        fresh--;
        rotten.push([rd, cd, t + 1]); // Keep track of time
      }
    });

    minutes = t;
  }

  // Check for fresh oranges condition
  return (fresh) ? -1 : minutes;