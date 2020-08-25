import React, { Component } from "react";
import "./App.css";

// Creeate a Countdown class component
class Countdown extends Component {
    
    // Initialise state of timerOn, timerStart, timerTime
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    // Create a startTimer fnction which sets state of timerOn, timerTime, timerStart
    // This function will be executed as soon as the user starts the timer
    startTimer = () => {
        
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
        
        // Check if the next time (new time) will be greter than 0 or not
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;

          // if greater than 0 then update the time in timerTime
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });

            // if not greater than 0, timerOn set back to false and user is alerted that the countdown has ended
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Countdown ended");
          }
        }, 10);
    };

    // Function to stop the timer
    stopTimer = () => {
      clearInterval(this.timer);
      this.setState({ timerOn: false });
    };

    // Reset the timer by setting the state of timerTime and 
    resetTimer = () => {
      if (this.state.timerOn === false) {
        this.setState({
          timerTime: this.state.timerStart
        });
      }
    };

  render() {

    return (
      <div className="Countdown">

        {/* Heading to tell this is a countdown  */}
        <div className="Countdown-header">Countdown</div>

        {/* To be used when increasing and decreasing the hr, min, sec */}
        <div className="Countdown-label">Hours : Minutes : Seconds</div>

        {/* Displaying the countdown */}
        <div className="Countdown-display">
          
          {/* Adding increasing buttons (&#8679) for hours, minutes and seconds */}
          <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incSeconds")}>&#8679;</button>
          
          <div className="Countdown-time">
              {hours} : {minutes} : {seconds}
          </div>
          
          {/* Adding decreasing buttons (&#8681) for hours, minutes and seconds */}
          <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decSeconds")}>&#8681;</button>
        </div>

        {/* Setting up the controls */}

        {/* Start button when the timer operations haven't been started */}
        {/* When the state of timerOn, timerTime and timerStart has returned to initial values */}
        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button onClick={this.startTimer}>Start</button>
        )}

        {/* Stop button when the state of timeOn is true i.e. timer is still ongoing */}
        {timerOn === true && timerTime >= 1000 && (
          <button onClick={this.stopTimer}>Stop</button>
          )}

        {/* Resume button when the timer has been stopped but time is still left */}
        {timerOn === false && (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button onClick={this.startTimer}>Resume</button>
          )}

        {/* Reset button when the timerTime (Countdown time) ended */}
        {(timerOn === false || timerTime < 1000) && (timerStart !== timerTime && timerStart > 0) && (
            <button onClick={this.resetTimer}>Reset</button>
          )}

      </div>
    );
  }
}
export default Countdown;