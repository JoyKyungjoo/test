import React, { Component } from 'react';

class Test1 extends Component {
    inputName = null

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
    handleClick1 = () => {
        this.setState = ({
        })
    }
    handleReset = () => {
        this.setState = ({
            name1 : '',
            age : '',
            addr : ''
        })
        this.inputName.focus()
    }
    render() {
        const { name1,age,addr } = this.state
        return (
            <div>
                <input type="text" ref={ref => {this.inputName = ref}} value={name1} name="name1" onChange={this.handleChange} /><br />
                <input type="text" value={age} name="age" onChange={this.handleChange} /><br />
                <input type="text" value={addr} addr="addr" onChange={this.handleChange} /><br />
                <br />
                <button onClick={this.handleClick1}>입력</button>
                <button onClick={this.handleReset}>초기화</button>
                <br />
                <p>이름 : {name1} / 나이 : {age} / 주소 : {addr} </p>
            </div>
        );
    }
}

export default Test1;