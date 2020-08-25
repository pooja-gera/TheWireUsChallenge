import React from "react";
import QuoteAuthor from "./QuoteAuthor";
import quotes from './QuoteAuthorDatabase';
// Import App.css to style the webpage
import "./App.css";

// Creates an App component
class App extends React.Component {
  constructor() {
    super();

    // Set default state of quote and author to the 1st element of quotes array
    // As soon as the webpage loads, the first element of array i.e. the first quote will be displayed 
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  // Create a function to display the quotes randomly
  randomQuote() {
    // A random number within the range of 0-(length of quotes array - 1) is assigned to randomNumber
    const randomNumber = Math.floor(Math.random() * quotes.length);

    // The quote(object) associated with that randomNumber is returned
    return quotes[randomNumber];  
  }

  
  // Generate New Quote Button is clicked, then this function starts
  handleClick = () => {
    // When button is clicked a random quote is generated using randomQuote function
    const generateRandomQuote = this.randomQuote();

    // The default state of the quotes are changed according to the randomQoute function
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });

  };

  // Create a randomColor function to change background and button color in the webpage
  randomColor() {
    // Assign the r, g and b values to random
    // Assign the color variable the expression having rgb(value, value, value)
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;

    //return the color variable and assign it to button and background color
    return color;
  }
  
  render() {
    return (
      <div>
        {/* Render the QuoteAuthor component which executes randomColor function and handleClick function when it's rendered*/}
        <QuoteAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;