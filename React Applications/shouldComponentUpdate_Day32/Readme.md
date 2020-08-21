## Day31

**Lifecycle of Components|Updating**

**shouldComponentUpdate()**

In the shouldComponentUpdate() method you can return a Boolean
value that specifies whether React should continue with
the rendering or not.

The default value is true.


**Challenge Description**

**Today's Task**: what happens when the shouldComponentUpdate() method returns false

**Hints**:
1. Create Header ,React Class Component type defining a constructor
   with props and setting he initial value of state with favourite
   color as red.
   
2. Now call the shouldComponentUpdate() method returnimg false.

3. Define Another method changing the value of favourite color.

4. Now render it displaying the initial favourite color and
   applying onClick event on the button to change the color.

**Results:**
The color doesn't change.

**Reason:**  Since shouldComponentUpdate () is falue so it Stop the component from rendering at any update
