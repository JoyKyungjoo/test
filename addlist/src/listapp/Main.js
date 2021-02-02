import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class Main extends Component {
    //데이터 관리 --> main의 역할
    no = 1
    state = {
        data : []
    }

    handelInsert = (text) => {
        const {data} = this.state
        this.setState({
            data : data.concat({no:this.no++, text})
        })
    }

    render() {
        const {data} = this.state
        return (
            <div>
                <Form onInsert = {this.handelInsert} />
                <List onData = {data} />
            </div>
        );
    }
}

export default Main;