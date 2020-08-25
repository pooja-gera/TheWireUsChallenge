
// Code from previous task
import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  // Code for new task
  // render the text Hi there and time
  // Time is converted to string  
  render() {
    return (
      <div className='container'>
        <h1>Hi there!</h1>
        <h2 className='time'>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;