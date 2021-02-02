import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {
    state = {
        message : '나는 설명입니다.'
    }
    handleClick1 = () => {
        alert('확인')
    }
    handleClick2 = () => {
        this.setState({
            message : '안녕하세요'
        })
    }
    // 아래 함수는 함수 호출시 값을 넘겨주는 유형 - 함수 선언 예시
    handleClick3 = (num) => {
        alert(num)
    }
    handleClick4 = (num1, num2) => {
        alert(num1 + num2)
    }
    render() {
        return (
            <div>
                <h1>최상위</h1>
                <hr />
                {/* Test1Sub에게 값 & 이벤트를 전달하는 방법 */}
                <Test1Sub 
                    msg = {this.state.message}
                    click1 = {this.handleClick1}
                    click2 = {this.handleClick2}
                    click3 = {this.handleClick3}
                    click4 = {this.handleClick4}
                />
            </div>
        );
    }
}

export default Test1;