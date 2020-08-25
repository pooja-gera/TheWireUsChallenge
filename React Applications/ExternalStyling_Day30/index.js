import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Create a Class Component Challenge 
class Challenge extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {/* Add different styling to p tag using external CSS file */}
        <p>Welcome to The WireUs Challenge</p>
      </div>
    );
  }
}

//Render the Challenge component using ReactDOM.render
ReactDOM.render(<Challenge />, document.getElementById('root'));