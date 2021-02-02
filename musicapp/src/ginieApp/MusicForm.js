import React, { Component } from 'react';
import './MusicForm.css'

class MusicForm extends Component {
    state = {
        text : ''
    }

    handleChange = (event) => {
        //1. 이렇게 작성되면 위 아래 코드가 동시실행이기 때문에, 타이밍 이슈로 제대로 노출 되지 않음
        // this.setState({
        //     text : event.target.value
        // })
        // this.props.onTitle(this.state.text)

        //2. 해결책 - 순서를 정해주어 정상노출되게 해줌
        this.setState({
            text : event.target.value
        },()=>this.props.onTitle(this.state.text))
    }

    

    render() {
        const {text} = this.state
        return (
            <div className="MusicForm">
                <input type="text" placeholder="음악명을 검색하세요."  onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MusicForm;