import React,{Component} from 'react'
/*create a class with a state component */
 class Message extends Component {
     constructor(){
         super()
         this.state={
             message:'Welcome Visitor'
         } 
     } 
     /*a function to change the value of message using setState */
     changeMessage(){
         this.setState({
            message:"THankyou for subscribing"
         })
     }
    /* render function to display the messsage and button */ 
    render (){
        return(
            <div>
             <h1>{this.state.message}</h1>
             <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
