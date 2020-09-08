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

const Form = ({ onWeather }) => {
  return (
    <form onSubmit={e => onWeather(e)}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button className="form-button">Get Weather Details</button>
    </form>
  );
};

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  
  getWeather = async e => {

    // To prevent automatic loading of screen 
    e.preventDefault();

    // City and Countryhave been sent to the current values in input field
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;

    // If the name of City and Country is true then display data fetched from API
    if (city && country) {
      

    // If city and country are not true then state of every variable back to initial values
    // Alert the user to type in correct values 
  } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter a valid values."
      });
    }
  };

    render() {
        return (
            <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="title-container">
                    <Title />
                  </div>
                  <div className="form-container">
                  <Form onWeather={this.getWeather} />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
    
export default App;