import React, { Component } from 'react';

class Test1SubSub extends Component {
    render() {
        const {msg1_1, click1_1, click2_1, click3_1, click4_1} = this.props
        return (
            <div>
                <h2> 자손영역 </h2>
                {/* 비구조 할당 전 */}
                {/* <h2>메세지 : {this.props.msg1_1}</h2>
                <button onClick={this.props.click1_1}>확인</button>
                <button onClick={this.props.click2_1}>메세지 변경</button> 
                <button onClick={this.props.click3(10)}>10 출력</button>*/}
                
                {/* 비구조 할당 후 */}
                <h2>메세지 : {msg1_1}</h2>
                <button onClick={click1_1}>확인</button>
                <button onClick={click2_1}>메세지 변경</button>

                {/* 아래와 같이 함수에 값을 넣어 호출하는 경우에는 꼭!!! 함수로 한번 묶어주어야 함 */}
                <button onClick={() => click3_1(10)}>10 출력</button>
                <button onClick={() => click3_1(30)}>30 출력</button>
                <button onClick={() => click4_1(10,30)}>10 + 30 출력</button> 
            </div>
        );
    }
}

export default Test1SubSub;