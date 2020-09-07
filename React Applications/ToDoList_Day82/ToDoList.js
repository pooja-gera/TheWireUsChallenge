import React from 'react';

const TodoList = (props) => {
    return (
        <div className="list-item">
            {/* delete button as 'x' */}
            <button>x</button>

            {/* Use props to use data from another file */}
            <li> {props.text} </li>
        </div>
    );
}

export default TodoList;