import React, { useEffect, useState }  from 'react';
import './MusicForm.css'

// 실시간 검색 가능하도록!
const MusicForm = ({onTitle}) => {
    const [text,setText] = useState('')
    const handleChange =(e) => {
        setText(e.target.value)
        // onTitle(text)
    }

    useEffect(() => {
        onTitle(text)
    },[text])

    return (
        <div className="MusicForm">
        <input type="text" placeholder="음악명을 검색하세요" value={text} onChange={handleChange} />
    </div>
    );
};

export default MusicForm;

 