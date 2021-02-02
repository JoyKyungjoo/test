import React, { useEffect, useState }  from 'react';
import './MusicForm.css'

// 실시간 검색 가능하도록! (copy본에서 확인가능)
// const MusicForm = ({onTitle}) => {
//     const [text,setText] = useState('')
//     const handleChange =(e) => {
//         setText(e.target.value)
//         // onTitle(text)
//     }

//     useEffect(() => {
//         onTitle(text)
//     },[text])

//     return (
//         <div className="MusicForm">
//         <input type="text" placeholder="음악명을 검색하세요" value={text} onChange={handleChange} />
//     </div>
//     );
// };

// 엔터쳤을때 검색이 가능하도록!
const MusicForm = ({onTitle}) => {
    const [text,setText] = useState('')
    const handleChange =(e) => {
        setText(e.target.value)
        // onTitle(text)
    }

    // 실시간 업데이트시에만 사용하기때문에 주석처리
    // useEffect(() => {
    //     onTitle(text)
    // },[text])

    // 엔터쳤을때 검색가능
    // 재검색하려면 내용지우고 엔터 해야합!
    const handleSubmit = (e) => {
        e.preventDefault()
        onTitle(text)
    }

    return (
        <form className="MusicForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="음악명을 검색하세요" value={text} onChange={handleChange} />
        </form>
    );
};

export default MusicForm;

 