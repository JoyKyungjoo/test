// 1 , 1_1 , 2 다 오류..INPUT 입력 안됨쓰 확인해보길!

import React, { Component } from 'react';

class Test2 extends Component {
    inputname = React.createRef();
    state = {
        name1 : '',
        age : '',
        addr : ''
    }
    handleChange = (e) => {
        const { name,value } = e.target
        this.setState=({
            [name] : value
        })
    }
    handleReset = () => {
        this.setState = ({
            name1 : '',
            age : '',
            addr : ''
        })
        this.inputname.current.focus()
    }
    render() {
        const { name1,age,addr } = this.state
        return (
            <div>
                <input type="text" ref= {this.inputname} value={name1} name="name1" onChange={this.handleChange} /><br />
                <input type="text" value={age} name="age" onChange={this.handleChange} /><br />
                <input type="text" value={addr} addr="addr" onChange={this.handleChange} /><br />
                <br />
                <button>입력</button>
                <button onClick={this.handleReset}>초기화</button>
                <br />
                <p>이름 : {name1} / 나이 : {age} / 주소 : {addr} </p>
            </div>
        );
    }
}

export default Test2;