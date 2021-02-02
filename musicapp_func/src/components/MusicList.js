import React from 'react';
import MusicItem from './MusicItem';
import './MusicList.css'

const MusicList = ({filterData,handleOpen}) => {
    return (
        <div className="MusicList">
                <table>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>앨범</th>
                            <th>곡명</th>
                            <th>가수</th>
                            <th>순위증감</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        filterData.map(item => 
                        <MusicItem 
                            key = {item.rank}
                            item = {item}
                            handleOpen = {handleOpen}
                        />)                   
                    }

                    </tbody>
                </table>
            </div>
    );
};

export default MusicList;
