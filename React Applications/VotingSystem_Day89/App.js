import React,{Component} from 'react';
// To be imported in the next task
import './App.css';

// Create class component App
class App extends Component{
	constructor(props){
        super(props);
        
        // Set default value of language's name and vote=0
		this.state = {
			languages : [
				{name: "C++", votes: 0},
				{name: "Python", votes: 0},
				{name: "Java", votes: 0},
				{name: "JavaScript", votes: 0}
			]
		}
	}

    //Create a function vote which takes in the index value/key of the language
	vote (i) {
        // Votes for the language corresponding to the key is increased by 1
        //state of the votes of language is changed
		let newLanguage = [...this.state.languages];
		newLanguage[i].votes++;
		this.setState({languages: newLanguage});
		
	}

	render(){
		return(
			<>
				<h2>Which programming language do you use?</h2>
                {/* Using state and index value as key, set the votes */}
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
                                {/* On clicking the button call the vote function to increase the vote of the language based on the key */}
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;