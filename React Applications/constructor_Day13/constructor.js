import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    //constructor is defined to store the value to the variable
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));

  