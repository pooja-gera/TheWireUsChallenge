// src/components/board-box.jsx

import React from 'react'

// Create Box component
export const Box = (props) => {
    return (
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}