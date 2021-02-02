import React, { Component } from 'react';

class Form extends Component {
    inputtext = React.createRef()

    //Q. state랑 함수는 메인에서 전달해준걸로 기억하는데 여기서 작성해도 되는건가?
    //Q. 넘겨주는 값(함수)랑 여기서 작성한 함수의 차이는?

    state = {
        text : ''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    // 데이터 전송은 main에게 해줌!!!
    // 메인에서 ONINSERT 넘겨받아서 작성됨.
    handleSubmit = (e) => {
        e.preventDefault()
        
        const {onInsert} = this.props
        const {text} = this.state
        onInsert(text)
        this.setState({
            text : ''
        })
        this.inputtext.current.focus()
    }

    render() {
        const {text} = this.state
        return (
            <div>
                {/* <h3>Form</h3> */}
                <form onSubmit={this.handleSubmit}>
                    {/* input이 여러개일때는 name 써야하지만, 하나일 경우는 생략가능 */}
                    <input type="text" ref= {this.inputtext} value={text} onChange={this.handleChange} />
                    <button type="submit">추가</button>
                </form>
            </div>
        );
    }
}

export default Form;