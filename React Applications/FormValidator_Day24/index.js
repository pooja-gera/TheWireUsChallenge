import React from 'react';
import ReactDOM from 'react-dom';

//Create a class component Form
class Form extends React.Component {
  constructor(props) {
    super(props);

    // Set value/state of username and age to " " as default
    this.state = {
      username: '',
      age: null,
    };
  }

// changeHandler function executes when some value is changed inside the input
  changeHandler = (e) => {
    
    // Checks if nam(property) = age and it's value is Number, if not then an alert is generated
    // nam and val are used so that different function don't have to be defined when value in Name and Age is changed
    
    let nam = e.target.name;
    let val = e.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }

    // Default state/ Previous values are changed to new typed in values
    this.setState({[nam]: val});
  }


  render() {
    return (
    
    // Create a form using the username and age
      <form>
      <h2>Hello, {this.state.username}. You are {this.state.age} years old today.</h2>
      <p>Enter your name:</p>
      
      {/* Set the input for name and age and which executes changeHandler function when something is typed in it*/}
      <input
        type='text'
        name='username'
        onChange={this.changeHandler}
      />
      
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.changeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
