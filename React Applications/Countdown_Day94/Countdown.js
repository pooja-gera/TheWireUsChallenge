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
    
    // Setting up decrease and increase hours, minutes & seconds method
    adjustTimer = input => {

      // Get current time and on/off status of countdown
      const { timerTime, timerOn } = this.state;

      // Assigned a max of 60 hours for simplification of countdown
      const max = 216000000;
      if (!timerOn) {
        
        // Checking if increasing the time by 1 hour be less than max
        if (input === "incHours" && timerTime + 3600000 < max) {
          // if yes then change state of countdown time
          this.setState({ timerTime: timerTime + 3600000 });

          // Checking if by decreasing the hours by 1 be greater than or equal to 0
        } else if (input === "decHours" && timerTime - 3600000 >= 0) {
          //if yes then change state of countdown time
          this.setState({ timerTime: timerTime - 3600000 });

          // Checking if increasing the time by 1 minutes be less than max
        } else if (input === "incMinutes" && timerTime + 60000 < max) {
          //if yes then change state of countdown time
          this.setState({ timerTime: timerTime + 60000 });

          // Checking if by decreasing the minutes by 1 be greater than or equal to 0
        } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
          //if yes then change state of countdown time
          this.setState({ timerTime: timerTime - 60000 });

          // Checking if increasing the time by 1 second be less than max
        } else if (input === "incSeconds" && timerTime + 1000 < max) {
          //if yes then change state of countdown time
          this.setState({ timerTime: timerTime + 1000 });

          // Checking if by decreasing the seconds by 1 be greater than or equal to 0
        } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
          //if yes then change state of countdown time
          this.setState({ timerTime: timerTime - 1000 });
        }
      }
  };

  render() {

    // Change the format of time
    //Eg: 1.5 hours gets converted to 1 hour 30 minutes
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

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