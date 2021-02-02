import React, { Component } from 'react';
import $ from 'jquery'

class Test1 extends Component {
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
        ]
    }

    //아래와 같은 방법은 사용가능하지만, 권장되지 않는 방법
    componentDidMount() {
        //jquery 문법 작성영역
        var msg = '';
        var $li = $('ul li');
        $('#text').keyup(function(){
            //input에 입력시 아래 li 영역 hide
            msg = $(this).val();
            $li.hide();
            //내가 작성하는 txt만 아래영역에서 노출 (like 실시간 검색 - but,대소문자 구분 안됨)
            var txt = $li.find('span:contains('+msg+')');
            $(txt).parent().show();
        })
    }


    render() {
        const {data} = this.state
        return (
            <div>
                <input type="text" id="text"/>
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

export default Test1;