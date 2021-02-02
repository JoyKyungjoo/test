import React, { Component } from 'react';

class Test1 extends Component {
    no = 5

    state = {
        data : [
            {no:1, name:'홍길동', done:false},
            {no:2, name:'강호동', done:false},
            {no:3, name:'김철수', done:false},
            {no:4, name:'유재석', done:false},
            {no:5, name:'이효리', done:false}
        ]
    }
    handleAdd = () => {
        const {data} = this.state
        this.setState({
            data : data.concat({no:this.no++, name: '엄정화', done:false})
        })
    }
    handleRemove = (id) => {
        const {data} = this.state
        this.setState({
            data : data.filter(item => item.no != id)
        })
    }
    handleModify = (id) => {
        const {data} = this.state
        this.setState({
            data : data.map(item => {
                if(item.no === id){
                    return{
                        ...item,
                        name:'제시',
                        done:true
                    }
                }
                return item
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>추가</button>
                <button onClick={() => this.handleRemove(1)}>삭제</button>
                <button onClick={() => this.handleModify(3)}>수정</button>
            </div>
        );
    }
}

export default Test1;