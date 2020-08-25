import React from 'react';

const TodoList = (props) => {

    return (
        <div className="list-item">
            <button 
                onClick = {() => {
                    props.onSelect(props.id)
                }}>
                x
            </button>
            <li> {props.text} </li>
        </div>
    );
}

export default TodoList;