import React, {Component} from 'react';

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "WireUs"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({
            name : "Challenge"
        })
    }

    render(){
        
        return(
            <div>

                <h4>The value of the attribute "name" in the state is <h3>{this.state.name}</h3> </h4>
                <button onClick={this.handleClick}>
                    Change State
                </button>

            </div>
        );
    }
} 

export default Parent;