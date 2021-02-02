import React, { Component } from 'react';

class Item extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.todo !== nextProps.todo){
            return true;
        }
        else{
            console.log('no-update')
            return false
        }
    }
    

    render() {
        const {todo,remove,toggle} = this.props
        return (
            // flagment로 작성!
            <>
                <li>
                    <span className={`${todo.done && 'on'}`} onClick={() => toggle(todo.no)}> &#10003; </span>
                    <strong className={`${todo.done && 'on'}`} onClick={() => toggle(todo.no)}>{todo.text}</strong>
                    <button onClick={() => remove(todo.no)}>삭제</button>
                </li>
            </>
        );
    }
}

export default Item;