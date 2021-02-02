import React, { Component } from 'react';

class Test4 extends Component {
    // 이벤트 사용한다는 것을 선언 (옛날방식 / 추천안함)
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
        console.log('1. constructor')
    }
    handleUp = () => {
        const {count} = this.state
        this.setState({
            count : count + 1
        })
    }
    handleDown = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }
    
    //언제노출돠는지 확인용
    componentDidMount() {
        console.log('3. componentDidMount')
    }
    //언제노출돠는지 확인용
    componentDidUpdate(prevProps, prevState) {
        console.log('4. componentDidUpdate')
    }
        

    render() {
        //언제노출돠는지 확인용
        console.log('2. render')
        const {count} = this.state
        return (
            <div>
                <button onClick={this.handleUp}>증가</button>
                <button onClick={this.handleDown}>감소</button>
                <h1> 숫자 : {count}</h1>
            </div>
        );
    }
}

export default Test4;