import React, {useState} from 'react';
import './App.css';

const App = () => {

    // useState to set the initial state of inputList
    const [inputList, setInputList] = useState("");

    const[items, setItems] = useState([]);

    // changeHandler function used when text is typed into the input box
    // hence is linked with onChange property of input
    const changeHandler = (e) => {
        // Setting the state to the value being typed in the input field
        setInputList(e.target.value);
    };
    
    // itemList gets executed when the + button is clicked
    const itemList = () => {
        // the old items are collected from the array items and inputList (newly added value) is added to the end of the list
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
    };

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
                    <button onClick={itemList}> + </button>

                    <ul className="list">
                        {/* Previous/ hard-code list item is deleted */}
                        {/* Array is mapped/traversed and items are added to list */}
                        {items.map( (itemval) => {
                            return <li> {itemval} </li>
                        } )}
                    </ul>
                </div>
            </div>
        )
}

export default App;