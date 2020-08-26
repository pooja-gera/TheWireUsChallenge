import React from 'react';

const TodoList = (props) => {

    return (
        <div className="list-item">
            <button 
            // Onclick function changed to check if cross button has been selected or not
            // send the id of cross selected to deleteItems function
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