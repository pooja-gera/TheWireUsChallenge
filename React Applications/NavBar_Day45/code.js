import React ,{ Component }  from 'react';

class Displayprop extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.name
        };
    }

    render(){
        return(
            <div>
                <h2> Received Props : {this.state.name}</h2>
            </div>
        );
    }
}

export default Displayprop;