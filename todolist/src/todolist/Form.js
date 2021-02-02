import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    textinput = React.createRef()
    state = {
        text : ''
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            text : value
        })
    }
    
    handleSubmit = (e) => {
        // 인풋에서 엔터칠때 새로고침 막아주는 함수
        e.preventDefault()
        // todos.js랑 연결해줌 (인풋에 엔터나 추가버튼 클릭시 state에 추가해줌) 
        this.props.insert(this.state.text)

        this.setState({
            text : ''
        })
        this.textinput.current.focus()
    }

    render() {
        const {text} = this.state
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" value={text} ref={this.textinput} onChange={this.handleChange}/>
                        <button type="submit">추가</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default Form;