/**Binding the function within state */
import React, {Component} from 'react';

class Click extends Component{
    constructor(props){
        super(props);
        this.state={
            text : "I am not Clicked!"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            text : "I am Clicked!"
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handelClick}>Click here!</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
} 

export default Click;

/**Binding the function in the callback */
import React, {Component} from 'react';

class Click extends Component{
    constructor(props){
        super(props);
        this.state={
            text : "I am not Clicked!"
        };
    }
    handleClick(){
        this.setState({
            text : "I am Clicked!"
        })
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.handelClick.bind(this)}>Click here!</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
} 

export default Click;