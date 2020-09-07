import React from 'react';
import ReactDOM from 'react-dom';

// Create a Greeting of React Class Component type
class Greeting extends React.Component {
  render() {
    // Pass the name as an attribute to the User component being rendered
    return (
      <div>
      <h1 style={{color:'white', backgroundColor: 'dodgerblue', width: '400px', textAlign: "center"}}>Hello, I am Sanchi Bansal</h1>
      </div>
    );
  }
}

//Use ReactDOM to render the Greeting Component
ReactDOM.render(<Greeting />, document.getElementById('root'));