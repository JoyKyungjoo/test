import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
    render() {
        const {done,onClose,findData} = this.props
        return (
            <div className={`Modal ${done && 'on'}`}>
                <h2>곡명 : {findData.title}</h2>
                <div>
                    <iframe width="656" height="369" src={"https://www.youtube.com/embed/"+findData.key}></iframe>
                </div>
                <p>가수 :  {findData.singer}</p>
                <button className="close" onClick={onClose}>X</button>
            </div>
        );
    }
}

export default Modal;