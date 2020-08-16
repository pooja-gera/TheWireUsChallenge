import React, { useState } from 'react'; 

//Create a function component Clicked
function Clicked() { 
	//Declare a new state variable, which we'll call "count"	
	const [count, setCount] = useState(0);

	return (
		<div>
			{/* Number of times clicked using count variable */}
			<p>You clicked {count} times</p>
			
			{/* Checking if the number of times clicked i.e. count is even or odd using ternary operator */}
			<p>The number of times you have clicked is {count%2==0? 'even' : 'odd'}</p>
			
			{/* On clicking the button the count is incremented by 1 */}
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
} 

//Clicked component is exported to App.js
export default Clicked; 
