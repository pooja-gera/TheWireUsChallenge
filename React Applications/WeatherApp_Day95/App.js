import React, { Component } from "react";
import "./App.css";

// API key to fetch weather details
const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

// Title component which containes the content of the title i.e. Weather App
const Title = () => {
  return (
    <div>
      <h1 className="title-container__title">Weather App</h1>
    </div>
  );
};

// App component is created
class App extends Component {
    render() {
        return (
            // All the following divs have been made to style the webpage
            <div className="wrapper">
              <div className="main">
                <div className="container">

                  {/* Title is rendered here */}
                  <div className="title-container">
                    <Title />
                  </div>

                  {/* Form will be rendered here during the further tasks */}
                  <div className="form-container">
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
    
export default App;