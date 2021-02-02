import React, { Component } from 'react';

class Test2 extends Component {
    state = {
        data : [
            {no:1, name: '유재석', age:20},
            {no:2, name: '이효리', age:25},
            {no:3, name: '엄정화', age:30},
            {no:4, name: '제시', age:15},
            {no:5, name: '화사', age:10}
        ]
    }
    // 1~3번 함수는 직접적으로 no값을 함수에 넣어줌 / 4,5번은 함수 호출시 no값을 정해줌
    handleClick1 = () => {
        this.setState({
            // 2번을 제외한 나머지만 필터링해서 노출시켜라
            data : this.state.data.filter(item => item.no !== 2)
        })
    }
    handleClick2 = () => {
        this.setState({
            data : this.state.data.filter(item => item.no !== 3)
        })
    }
    handleClick3 = () => {
        this.setState({
            data : this.state.data.filter(item => item.no !== 4)
        })
    }
    // 4번과 5번 함수는 동일.
    handleClick4 = (id) => {
        this.setState({
            data : this.state.data.filter(item => item.no !== id)
        })
    }
    handleClick5 = (num) => {
        this.setState({
            data : this.state.data.filter(item => item.no !== num)
        })
    }
    //6번과 7번은 동일한 내용의 함수
    //6번은 정석대로 작성
    handleClick6 = (id) => {
        this.setState({
            data : this.state.data.map(item => {
                if(item.no === id){
                    return{
                        ...item,
                        name : '강호동',
                        age : 20
                    }
                }
                else{
                    return item
                }
            })
        })
    }
    //7번은 삼항연산자로 짧게 생략버전으로 작성
    handleClick7 = (id) => {
        this.setState({
            data : this.state.data.map(item => item.no === id ? { ...item, name:'김종민',age:50 } : item)
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map(item => 
                            <li>{item.no} / {item.name} / {item.age}</li>
                        )
                    }
                </ul>
                <hr />
                <p>
                    <button onClick={this.handleClick1}>2번 삭제</button>
                    <button onClick={this.handleClick2}>3번 삭제</button>
                    <button onClick={this.handleClick3}>4번 삭제</button>
                </p>
                <p>
                    <button onClick= {() => this.handleClick4(1)}>1번 삭제</button>
                    <button onClick= {() => this.handleClick5(3)}>3번 삭제</button>
                </p>
                <p>
                    <button onClick={() => this.handleClick6(4)}>이름,나이 변경</button>
                    <button onClick={() => this.handleClick7(5)}>이름,나이 변경</button>
                </p>
            </div>
        );
    }
}

export default Test2;