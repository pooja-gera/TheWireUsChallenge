## Day 26
---
### Fitting Shelves Problem

Given length of wall w and shelves of two lengths m and n, find the number of each type of shelf to be used and the remaining empty space in the optimal solution so that the empty space is minimum.

Example: Let w = 24, m = 3 and n = 5, then if we use three units of both shelves, we will have 0 space left.
24 = (3 * 3) + (5 * 5) but not ( 8 * 3 ), since the larger shelf is cheaper

**Hint:** The larger of the two shelves is cheaper so it is preferred. However, cost is secondary and first priority is to minimize empty space on wall