import  React, { useRef, useState } from 'react'
import './Todo.css'
import Form from './Form';
import List from './List';

const Todo = () => {   
    const no = useRef(1)
    const [todos,setTodos] = useState([])

    const handleInsert = (text) => {
        // setTodos(todos.concat({no:no.current++ , text : text}))

        setTodos([
            ...todos,
            {
                no : no.current++,
                text : text,
                done : false  //toggle 하여 체크 확인하려 추가!
            }
        ])
    }

    const handleClear = (no) => {
        const newItems = todos.filter(todo => todo.no !== no)
        setTodos(newItems)
    }

    const hadleToggle = (no) => {
        // 방법1
        // const newItem = todos.map(todo => 
        //     todo.no === no ? {
        //         ...todo,
        //         done:!todo.done
        //     }:todo )
        // setTodos(newItem)

        // 방법2
        setTodos(todos.map(todo => 
                {
                    if(todo.no === no){
                        return{
                            ...todo,
                            done : !todo.done
                        }
                    }
                    return todo
                }
            )
        )
    }

    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form
                onInsert = {handleInsert}
            />
            <List 
                todos = {todos}
                onClear = {handleClear}
                onToggle = {hadleToggle}
            />
        </div>
    );
};

export default Todo;