import React, { Component } from 'react';

class Test1_1 extends Component {
    state = {
        name1 : '',
        age : '',
        addr : ''
    }
    handleChange = (e) => {
        const { name,value } = e.target
        this.setState({
            [name] : value
        })
    }
    render() {
        const { name1,age,addr } = this.state
        return (
            <div>
                <input type="text" value={this.state.name1} name="name1"/>
                <input type="text" value={this.state.age} name="age"/>
                <input type="text" value={this.state.addr} addr="addr"/>
                <button>초기화</button>
            </div>
        );
    }
}

export default Test1_1;