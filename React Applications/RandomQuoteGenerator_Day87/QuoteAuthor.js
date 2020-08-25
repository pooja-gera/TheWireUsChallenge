import React from "react";

class QuoteAuthor extends React.Component {
  render() {
    // Get the random color from by executing displayColor function in App.js 
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    // Set the backgroundColor property of the webpage to randomColor
    html.style.backgroundColor = randomColor;

    return (
        <div style={{ backgroundColor: "white" }} className="quotebox">
          
          {/* Setting up the text-color of quote and author to be of randomColor */}
          <div
            key={Math.random()}
            style={{ color: randomColor }}
          >
            <h2 id="quote">"{this.props.quote}"</h2>
            <h5 id="author">
              -{this.props.author ? this.props.author : "Unknown"}-
            </h5>
          </div>
          <button
            style={{ backgroundColor: randomColor }}
            id="newquote"
            onClick={this.props.handleClick}
          >
            Generate New quote
          </button>
        </div>
      );
  }
}

export default QuoteAuthor