import React, { Component } from 'react';
import Test1SubSub from './Test1SubSub';

class Test1Sub extends Component {
    render() {
        const {msg, click1, click2, click3, click4} = this.props
        return (
            <div>
                <h2>자식영역</h2>
                {/* 비구조할당 전 */}
                {/* <h2> 메세지 : {this.props.msg} </h2>
                <button onClick={this.props.click1}>확인</button>
                <hr />
                <Test1SubSub
                    msg1_1 = {this.props.msg}
                    click1_1 = {this.props.click1}
                    click2_1 = {this.props.click2}
                /> */}

                {/* 비구조할당 후 */}
                <h2> 메세지 : {msg} </h2>
                <button onClick={click1}>확인</button>
                <hr />
                <Test1SubSub
                    msg1_1 = {msg}
                    click1_1 = {click1}
                    click2_1 = {click2}
                    click3_1 = {click3}
                    click4_1 = {click4}
                />
            </div>
        );
    }
}

export default Test1Sub;