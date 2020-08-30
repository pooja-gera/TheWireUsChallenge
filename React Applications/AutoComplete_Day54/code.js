import React from 'react';
import countries from './data';

export default class AutoCompletedText extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: '',
            list : countries.sort()
        }
    }
    
    render() {
        return(
            <div  style={{backgroundColor: "#DDACBB"}}>
                <h2>Auto Complete Suggestions</h2>
                <div>
                    <input value={this.state.value}/>
                </div>
                <div>
                    Suggestions
                </div>
            </div>
        );
    }

}