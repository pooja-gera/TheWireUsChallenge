import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//create a User of React Class Component type
class User extends Component {
  render() {
    return (
      // Inside HTML h1 tag add the greeting
      // Access the name passed from Greeting component using this.props.name
      <h1> Hello, {this.props.name}!</h1>
    )
  }
}

// Create a Greeting of React Class Component type
class Greeting extends React.Component {
  render() {
    return (
      //Pass the name as an attribute to the User component being rendered
      <div>
        <User name="Sanchi" />
      </div>
    );
  }
}

//Use ReactDOM to render the Greeting Component
ReactDOM.render(<Greeting />, document.getElementById('root'));