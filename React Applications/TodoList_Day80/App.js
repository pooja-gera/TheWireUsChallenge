import React, {useState} from 'react';
import './App.css';

const App = () => {

    // useState to set the initial state of inputList
    const [inputList, setInputList] = useState("");

    const changeHandler = () => {}
    // changeHandler function used when text is typed into the input box
    // hence is linked with onChange property of input

        return (
            <div className="main">
                <div className="center">
                    <br />
                    <h1>To-do List</h1>
                    <br />
                    <input 
                        type="text"
                        placeholder="Add a todo item"
                        onChange={changeHandler}
                    />
                    <button> + </button>

                    <ul className="list">
                        <li>
                            {/* display input list */}
                            {inputList}
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default App;