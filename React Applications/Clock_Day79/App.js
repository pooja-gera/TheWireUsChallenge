import React, { Component } from 'react';
import Clock from './Clock';

// Create an App component which renders the Clock component created in the previous task
class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

// App component is exported and rendered in index.js
export default App;