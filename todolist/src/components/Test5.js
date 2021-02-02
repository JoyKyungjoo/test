import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        color : '#f00',
        done : false
    }
    handleColor = () => {
        this.setState({
            color : '#' + Math.floor(Math.random() * 16777215).toString(16)
        })
    }
    handleToggle = () => {
        const {done} = this.state
        this.setState({
            done : !done
        })
    }

    render() {
        const {color,done} = this.state
        return (
            <div>
                <button onClick={this.handleColor}>random color</button>
                <button onClick={this.handleToggle}>show / hide</button>
                <h2 style={{color:color}}>컬러</h2>
                <hr />
                {/* 삼항연산자 혹은 &연산자로 작성해야함. */}
                {
                    done && <Visible color = {color}/>
                }
            </div>
        );
    }
}

class Visible extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
        console.log('1. constructor')
    }

    componentWillUnmount(){
        console.log('5. componentWillUnmount')
    }

    componentDidMount() {
        console.log('3. componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('4. componentDidUpdate')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        // return true //(기본값)
        return nextState.count % 5 !== 0
    }
    
    up = () => {
        const {count} = this.state
        this.setState({
            count : count + 1
        })
    }
    down = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }
    
    render() {
        console.log('2. render')
        const {count} = this.state
        const {color} = this.props
        return (
            <div>
                <h1 style={{color:color}} >자식 컴포넌트 : {count} </h1>
                <button onClick={this.up}>증가</button>
                <button onClick={this.down}>감소</button>
            </div>
        );
    }
}

export default Test5;