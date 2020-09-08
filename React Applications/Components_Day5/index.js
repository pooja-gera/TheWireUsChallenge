import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //creates an App of React Component type
  render() {
    //render() menthod returns HTML
    return (
      //return has same functionality like in JS, C++, Python i.e. to return the value from a function
      <div className="App">
        <h1>Hello, World!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
//React DOM render() method to render the App class we created into the root div in our HTML.
//Basically, the HTML code from App class is added into div having id=root.