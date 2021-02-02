import React, { Component } from 'react';
import './Test2.css'

class Test2 extends Component {
    state = {
        done : false
    }
    handleClick = () => {
        const {done} = this.state
        this.setState({
            done : !done
        })
    }

    render() {
        return (
            <div>
                {/* 아래와 같이 클래스네임 추가하면 done값에 따라 클래스이름을 붙여주고 지워주는 역할 */}
                {/* <p className={`${this.state.done ? 'on':null}`} onClick={this.handleClick}>안녕하세요</p> */}
                
                {/* 삼항연산자로 작성된 위 코드를 아래와 같이 &&연산자(앤드연산자)로도 작성 가능함! */}
                <p className={`${this.state.done && 'on'}`} onClick={this.handleClick}>안녕하세요</p>
            </div>
        );
    }
}

export default Test2;