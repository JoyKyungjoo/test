import React from 'react';
import './Item.css'

const Item = ({todos,onClear,onToggle}) => {
    return (
        <>
            <li className="Item">
                <span className={`${todos.done && 'on'}`} onClick={() => onToggle(todos.no)}> &#10003;  </span>
                <em className={`${todos.done && 'on'}`} onClick={() => onToggle(todos.no)}>  {todos.text}  </em> <button onClick={() => onClear(todos.no)}>삭제</button>
            </li>
        </>
    );
};

export default Item;