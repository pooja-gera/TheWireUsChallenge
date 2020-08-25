import React, { Component } from "react";

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

  render() {
    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
      </div>
    );
  }
}
export default Countdown;