import React, { Component } from 'react';
import cat0 from './images/cat0.jpg'
import cat1 from './images/cat1.jpg'
import bg from './images/bg.jpg'

class Test2 extends Component {
    render() {
        const style1 = {
            width:500 , height:200, background:'skyblue'
        }
        return (
            <div>
                <div style={ style1 }></div>
                <div style={{
                    width:'100%', height:700, backgroundPosition:'0 0',
                    backgroundImage:'url('+bg+')' ,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat'
                }}></div>
                {/* public */}
                <img src="/images/cat2.jpg" alt="" />
                <img src= { cat0 } alt="" />
                <img src= { cat1 } alt="" />
            </div>
        );
    }
}

export default Test2;