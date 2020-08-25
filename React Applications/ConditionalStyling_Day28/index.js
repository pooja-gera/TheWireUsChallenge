import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
// constructor(props) and super(props) for accessing the toggle value passed
  constructor(props) {
    super(props);
    //toggleOn state of button set to true
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // setting the state opposite to previous state
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
    //onClick event triggers handleClick function 
      <button onClick={this.handleClick}>
        {/* Conditional styling set to ON or OFF based on toggleOn state of button */}
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render( <Toggle />, document.getElementById('root'));