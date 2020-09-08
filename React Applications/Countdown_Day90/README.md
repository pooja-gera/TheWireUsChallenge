# Day 90 

## Countdown in React JS : Starting the Countdown timer

In this task, you will build a Countdown timer using knowledge of CSS, JavaScript and React.


#### Challenge Description 
1. Create and export a component Countdown in Countdown.js. Render the div with class as Countdown, inside this div create another div with class as Countdown-header.
2. Initialise the state of timerOn to false and of timerStart and timerTime to 0.
3. Create a startTimer function which sets the state of timerOn to true and of timerTime and timerStart to the current values.
4. Next step in this function is to check if the next second is greater than or equal to 0 or not. 
    - If equal true, set the timerTime to the newTime.
    - Else set the state of timerOn to false and alert the user that the countdown has ended.