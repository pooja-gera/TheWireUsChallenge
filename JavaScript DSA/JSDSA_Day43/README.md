## Day 43
---
### Fruits into baskets

**This challenge is taken from Leetcode**

In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.


Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

**Example:**
> **Input:** [1, 2, 1]
  **Output:** 3
  **Explanation:** We can collect [1, 2, 1]

**Hint:** This is similar to longest substring without repeating characters **and** subarrays with k different integers
