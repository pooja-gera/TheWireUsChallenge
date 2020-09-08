import React, {useState} from 'react';
import './App.css';
import TodoList from './ToDoList';

const App = () => {

    const [inputList, setInputList] = useState("");

    const[items, setItems] = useState([]);

    
    const changeHandler = (e) => {
        setInputList(e.target.value);
    };
    
    const itemList = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });

        // Input field is set back to empty after array has been added
        setInputList('')
    };

        return (
            <div className="main">
                <div className="center">
                    <br />
                    <h1>To-do List</h1>
                    <br />
                    <input 
                        type="text"
                        value={inputList}
                        placeholder="Add a todo item"
                        onChange={changeHandler}
                    />
                    <button onClick={itemList}> + </button>

                    <ul className="list">
                        {items.map( (itemval) => {
                            // ToDoList is passed the itemval i.e. imput field text
                           return <TodoList text={itemval}/>
                        } )}
                    </ul>
                </div>
            </div>
        )
}

export default App;