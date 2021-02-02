import React, { Component } from 'react';

class Test4 extends Component {
    inputid = React.createRef()
    //초기값 선언
    no = 1

    state = {
        id : '',
        pw : '',
        data : []
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    //비구조할당 후
    handleClick = (e) => {
        //submit후 추가
        e.preventDefault()

        const { data, id, pw } = this.state
        this.setState({
            data: this.state.data.concat({no:this.no++, id:id, pw:pw}),
            id:'',
            pw:''
        })
        this.inputid.current.focus()
    }
    // 비구조할당 전
    // handleClick = () => {
    //     this.setState({
    //         data: this.state.data.concat({no:this.no++, id:this.state.id, pw:this.state.pw}),
    //         id:'',
    //         pw:''
    //     })
    //     this.inputid.current.focus()
    // }
    render() {
        const {id,pw,data} = this.state
        return (
            <div>
                {/* <p> */}
                <form onSubmit={this.handleClick}>
                    <input type="text" ref={this.inputid} name='id' value={id} onChange={this.handleChange}/>
                    <input type="text" name='pw' value={pw} onChange={this.handleChange}/>
                    {/* 기존버전 */}
                    {/* <button onClick={this.handleClick}>입력</button> */}
                    
                    {/* submit으로 수정한 버전 */}
                    <button type="submit">입력</button>
                </form>
                {/* </p> */}
                <hr />
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no} / {item.id} / {item.pw}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test4;