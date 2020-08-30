import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            username : "",
            password : "",
            submit : false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleUsername(event){
        this.setState({
            username : event.target.value
        })
    }
    handlePassword(event){
        this.setState({
            password : event.target.value
        })
    }

    handleSubmit(event){
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
                    <h1>Your form has been submitted succesfully!</h1> :
                    <form onSubmit={this.handleSubmit}>
                        <p>UserName</p>
                        <input value={this.state.username} onChange={this.handleUsername}/><br/>
                        <p>Password</p>
                        <input value={this.state.password} onChange={this.handlePassword}/><br/><br/>
                        <button onClick={this.handleClick}>Login</button>
                    </form>
                }
            </div>
        );
    }
} 

export default Form;