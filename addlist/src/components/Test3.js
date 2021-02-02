import React, { Component } from 'react';

class Test3 extends Component {
    //1번 방법 사용시
    // inputText = null

    //2번 방법 사용시
    inputText = React.createRef()

    state = {
        done : false  // false : 소문자 , true : 대문자
    }

    handleToggle = () => {
        //1번 방법 사용시
        //const value = this.inputText.value  //input 태그에 있는 값
        //2번 방법 사용시
        const value = this.inputText.current.value
        const isDone = this.state.done //done 값 (t/f)

        //1번 방법 사용시
        //this.inputText.value = isDone ? value.toLowerCase() : value.toUpperCase()
        //2번 방법 사용시
        this.inputText.current.value = isDone ? value.toLowerCase() : value.toUpperCase()
        this.setState({
            done : !isDone
        })
    }
    render() {
        return (
            <div>
                {/* 1번 방법 사용시 */}
                {/* <input type="text" ref={ref => this.inputText = ref} /> */}
                {/* 2번 방법 사용시 */}
                <input type="text" ref={this.inputText} />
                <button onClick={this.handleToggle}>변환</button>
            </div>
        );
    }
}

export default Test3;