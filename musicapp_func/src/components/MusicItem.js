import React from 'react';
import './MusicItem.css'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";

const MusicItem = ({item,handleOpen}) => {
    return (
        <>
            <tr onClick={()=>handleOpen(item.rank)} >
                <td>{item.rank}</td>
                <td>
                    <img src={item.poster} width="50" alt="앨범 포스터" />
                </td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
                <td>
                    {/* 상승 , 유지, 하강 */}
                    {item.state === '상승' && <FaChevronUp style={{color:'red'}} />}
                    {item.state === '유지' && <FaWindowMinimize style={{color:'black'}} />}
                    {item.state === '하강' && <FaChevronDown style={{color:'blue'}} />}
                </td>
            </tr>
        </>
    );
};

export default MusicItem;
