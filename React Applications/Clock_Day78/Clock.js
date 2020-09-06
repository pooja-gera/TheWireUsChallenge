import React, { Component } from 'react';

// Create a Clock component
class Clock extends Component {

  // Set state of time = date object
  state = {
    time: new Date()
  };

  // Using setInterval change the state of the time every second
  // Use componentDidMount to create a timer id which changes at every second
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Called after every second to change the state of time to new time
  tick() {
    this.setState({
      time: new Date()
    });
  }
}

export default Clock;