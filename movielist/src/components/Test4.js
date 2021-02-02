import React, { Component } from 'react';
import './Reset.scss'
import './Test4.scss'

class Test4 extends Component {
    state = {
        data : [
            {no:1, title:'뉴스내용 입니다. 뉴스 뉴스 ', date:'2020.10.22', link:'http://www.naver.com'},
            {no:2, title:'뉴스내용 입니다. 뉴스 뉴스 ', date:'2020.10.22', link:'http://www.naver.com'},
            {no:3, title:'뉴스내용 입니다. 뉴스 뉴스 ', date:'2020.10.22', link:'http://www.naver.com'},
            {no:4, title:'뉴스내용 입니다. 뉴스 뉴스 ', date:'2020.10.22', link:'http://www.naver.com'},
            {no:5, title:'뉴스내용 입니다. 뉴스 뉴스 ', date:'2020.10.22', link:'http://www.naver.com'},
        ]
    }
    render() {
        const {data} = this.state
        return (
            <div className="Test4">
                <article>
                    <h3>공지사항</h3>
                    <ul>
                        {
                            data.map( item => <li key={item.no}>
                                 <a href={item.link} target="_blank"> {item.title}</a>
                                 <span> {item.date}  </span>   
                            </li>)
                        }
                        {/* <li><a href="#">뉴스내용</a><span>날짜</span></li> */}
                    </ul>
                </article>
                <p className="more">더보기+</p>
            </div>
        );
    }
}

export default Test4;