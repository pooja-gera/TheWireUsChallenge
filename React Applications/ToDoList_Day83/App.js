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
        setInputList('')
    };

    // Create function deleteItems 
    // Used to delete items from the task list
    // Input the id of the element whose cross has been clicked
    const deleteItems = (id) => {
        
        // Select all the elements in array
        // Set the state of the array to new state by filtering out the element whose index matches with is i.e. whose cross has been clicked
        setItems((oldItems) => {
            return oldItems.filter((elem, index) => {
                return index !== id;
            })
        })
    }

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
                        {items.map( (itemval, index) => {
                           return <TodoList
                            key={index}
                            id={index}
                            text={itemval}
                            onSelect = {deleteItems}
                            />
                        } )}
                    </ul>
                </div>
            </div>
        )
}

export default App;