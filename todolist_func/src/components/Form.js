import React, { useRef, useState } from 'react';
import './Form.css'

const Form = ({onInsert}) => {
    const textInput = useRef()
    const [text,setText] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()

        onInsert(text)

        setText('')
        textInput.current.focus()
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="할일입력" value={text} ref={textInput} onChange={handleChange} />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default Form;