## Day 17


**Lifecycle of Components|Updating**

**getSnapshotBeforeUpdate**

In the getSnapshotBeforeUpdate() method you have access to the props and state
before the update, meaning that even after the update, you can check what
the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include
the componentDidUpdate() method, otherwise you will get an error.


**Challenge Description**


**Hints:**

1. When the component is mounting it is rendered with the favorite color "red".

2. When the component has been mounted, a timer changes the state, and after one second, 
the favorite color becomes "yellow".

3. This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate()
method, this method is executed, and writes a message to the empty DIV1 element.

4. Then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element.

**Result:** 
IT will display what was the previous value of the variable before update.

For References: https://www.w3schools.com/react/react_lifecycle.asp
