import React, { Component } from 'react';
import './MusicItem.css'

class MusicItem extends Component {
    render() {
        const {musicData,onOpen} = this.props
        return (
            <>
                <tr onClick={() => onOpen(musicData.rank)} >
                    <td>{musicData.rank}</td>
                    <td>
                        <img src={musicData.poster} width="50" />
                    </td>
                    <td>{musicData.title}</td>
                    <td>{musicData.singer}</td>
                    <td>
                        {musicData.state === '유지' && "-" }
                        {musicData.state === '상승' && "▲" }
                        {musicData.state === '하강' && "▼" }
                    </td>
                </tr>
            </>
        );
    }
}

export default MusicItem;