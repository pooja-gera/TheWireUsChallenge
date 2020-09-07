import React, {Component} from 'react';

class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            name : props.name
        };
    }
    render(){
        return(
            <h1>
                This is a Child Component with name as {this.state.name}
            </h1>
        );
    }
}


class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            input:""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({
            input : "WireUs"
        })
    }

    render(){
        
        return(
            <div>
                <button onClick={this.handleClick}>
                    Click here to render child component
                </button>
                {this.state.input !=="" && <Child name={this.state.input}/>}
            </div>
        );
    }
} 

export default Parent;