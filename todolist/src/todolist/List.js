import React, { Component } from 'react';
import Item from './Item';
import './List.css'

class List extends Component {
    render() {
        const {todos,remove,toggle} = this.props
        return (
            <div className="List">
                <ul>
                    {
                        todos.map(todo => 
                        <Item 
                            key={todo.no} 
                            todo={todo} 
                            remove={remove} 
                            toggle={toggle}
                        />)
                    }

                    {/* {
                        todos.map(todo => <li key={todo.no}>{todo.text}</li>)
                    } */}

                    {/* <li>
                        <span> &#10003; </span>
                        <strong>청소하기</strong>
                        <button>삭제</button>
                    </li> */}
                </ul>
            </div>
        );
    }
}

export default List;