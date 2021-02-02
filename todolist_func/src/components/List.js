import React from 'react';
import Item from './Item';
import './List.css'


const List = ({todos,onClear,onToggle}) => {
    return (
        <div className="List">
            <ul>
               {
                   todos.map(todos => 
                   <Item 
                    todos = {todos}
                    onClear = {onClear}
                    onToggle = {onToggle}
                   />)
               }
            </ul>
        </div>
    );
};

export default List;