import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            fruits:["apple", "orange", "pineapple"]
        };
    }
    render(){
    const list = this.state.fruits.map(i => <li key={i}>{i}</li> );
        return(
            <div>
                <ul>
                <list/>
                </ul>
            </div>
        );
    }
} 

export default List;