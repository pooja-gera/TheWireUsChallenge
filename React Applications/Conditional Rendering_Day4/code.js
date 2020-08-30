import React, {Component} from 'react';

class ConditionalRender extends Component{
    constructor(props){
        super(props);
        this.state={
            submit : false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        console.log("Submitted");
        this.setState({
            submit : true
        });
    }

    render(){
        return(
            <div>
                {this.state.submit ? 
                    <h1>Button Clicked!</h1> :
                    <button onClick={this.handleClick}>Login</button>
                }
            </div>
        );
    }
} 

export default ConditionalRender;