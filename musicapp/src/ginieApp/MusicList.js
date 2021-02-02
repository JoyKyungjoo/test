import React, { Component } from 'react';
import MusicItem from './MusicItem';
import './MusicList.css'

class MusicList extends Component {
    render() {
        const {filterData, onOpen} = this.props
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
                            <th>순위변동</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        filterData.map(musicData => 
                            <MusicItem 
                                key = {musicData.rank}
                                musicData = {musicData}
                                onOpen = {onOpen}
                            />
                        )
                    }
                        {/* <tr>
                            <td>{musicData[0].rank}</td>
                            <td>
                                <img src={musicData[0].poster} width="50" />
                            </td>
                            <td>{musicData[0].title}</td>
                            <td>{musicData[0].singer}</td>
                            <td>{musicData[0].state}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MusicList;