import React, { Component } from 'react';

class Test2 extends Component {
    state = {
        data : [
            {no:1, name: '홍길동', age:20},
            {no:2, name: 'aBc', age:20},
            {no:3, name: '강호동', age:20},
            {no:4, name: '김철수', age:20},
            {no:5, name: 'ddd', age:20},
            {no:6, name: '이효리', age:20},
            {no:7, name: 'MMkkS', age:20},
            {no:8, name: '유재석', age:20},
            {no:9, name: '이수근', age:20},
            {no:10, name: 'aBcDeF', age:20}
        ],
        text : ''
    }

    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }

    render() {
        const {data, text} = this.state
        const txt = data.filter(item => item.name.indexOf(text) !== -1)
        
        console.log(txt) //배열객체로 노출 -> [{}]
        const txt1 = data.find(item => item.no === 1)
        console.log(txt1) //객체 하나로 노출 -> []
        
        return (
            <div>
                <input type="text" id="text" value={text} onChange={this.handleChange}/>
                <hr />
                {
                    txt.map(item =>
                        <p key={item.no}>
                            {item.no} / {item.name}
                        </p>
                    )
                }
                <hr />
                <ul>
                    {
                        data.map(item => 
                            <li key={item.no}>
                                {item.no} / <span>{item.name}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Test2;