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

    const deleteItems = (id) => {
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