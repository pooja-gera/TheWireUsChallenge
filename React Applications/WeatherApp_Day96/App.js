import React, { Component } from "react";
import "./App.css";

const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

const Title = () => {
  return (
    <div>
      <h1 className="title-container__title">Weather App</h1>
    </div>
  );
};

// Create a Form component
const Form = ({ onWeather }) => {
  return (
    // When onSubmit is fired, onWeather will be fired which we have created
    <form onSubmit={e => onWeather(e)}>

      {/* Give imput fields for city and country for which data has to be displayed */}
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />

      {/* And a button which set off on Submmit */}
      <button className="form-button">Get Weather Details</button>
    </form>
  );
};

class App extends Component {
    render() {
        return (
            <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="title-container">
                    <Title />
                  </div>
                  <div className="form-container">

                  {/* Form component is rendered which executes getWeather functions
                  as soon as onWeather is performed */}
                  <Form onWeather={this.getWeather} />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
    
export default App;