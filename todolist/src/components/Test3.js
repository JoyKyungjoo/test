import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        username:'',
        password:''
    }
    handleChange = (e) => {
        const {username,password} = e.target
        this.setState({
            [username] : password
        })
    }
    render() {
        const {username,password} = this.state
        return (
            <div>
                <input type="text" value={username} name="username" onChange={this.handleChange} />
                <input type="password" value={password} name="password" onChange={this.handleChange} />
                
                {/* 1번 방법 */}
                {
                    password.length > 6 ? <button disabled>비활성</button> : <button>활성</button>
                }
                
                {/* 2번 방법 */}
                {/* <button disabled={password.length > 6 && true}>submit</button> */}
            </div>
        );
    }
}

export default Test3;