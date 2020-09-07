import React from 'react';
import ReactDOM from 'react-dom';

//create a User of React Class Component type
class User extends React.Component {
  render() {
    // Inside HTML h1 tag add the greeting
    // Access the first and last name passed from the userinfo object in Greeting component using this.props.name
    // Access properties of object similar to how it is done in JavaScript 
    return <h2>Hello, {this.props.name.fName} {this.props.name.lName}!</h2>
  }
}

// Create a Greeting of React Class Component
class Greeting extends React.Component {
  render() {
    // Create an object userinfo with first and last name properties
    const userinfo = {
        fName: "Sanchi", 
        lName: "Bansal"
    };
    // Pass the name as an attribute to the User component being rendered
    return (
      <div>
      <User name={userinfo} />
      </div>
    );
  }
}

//Use ReactDOM to render the Greeting Component
ReactDOM.render(<Greeting />, document.getElementById('root'));
