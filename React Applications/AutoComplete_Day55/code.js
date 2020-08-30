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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const input = e.target.value;
        let suggestions = [];
        if(input.length > 0){
            const regex = new RegExp(`^${input}`, 'i');
            console.log("*"+regex);
            suggestions = this.state.list.filter(v => regex.test(v));
            console.log(suggestions);
        }
        this.setState({
            suggestions,
            text : input
        });
    }
    
    render() {
        return(
            <div  style={{backgroundColor: "#DDACBB"}}>
                <h2>Auto Complete Suggestions</h2>
                <div>
                    <input value={this.state.text} onChange={this.handleChange} placeholder="Enter the country"/>
                </div>
                <div>
                    <h3>Suggestions</h3>
                </div>
            </div>
        );
    }

}