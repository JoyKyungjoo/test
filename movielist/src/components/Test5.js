import React, { Component } from 'react';
import './Reset.scss'
import './Test5.scss'
import Data from './Data.json'

class Test5 extends Component {
    state = {
        movies : Data ,
        movieItem : {}
    }
    componentDidMount() {
        const {movies} = this.state 
        this.setState({
            movieItem : movies[0]
        })
    }
    handleOver  = (id) => {
        const {movies} = this.state 
        this.setState({
            movieItem : movies.find( movie => movie.rank === id )
        })
    }
    handleOut  = () => {
        const {movies} = this.state 
        this.setState({
            movieItem : movies[0]
        })
    }


    render() {
        const {movies, movieItem} = this.state
        return (
            <div className="Test5">
                <div className="movie-box">
                    <article className="movie-view">
                        <img src={movieItem.thumbUrl} alt="" />
                        <div>
                            <h3>{movieItem.movieNm}</h3>
                            <span>{movieItem.movieNmEn}</span>
                            <ul>
                                <li><strong>개봉일</strong>{movieItem.openDt} </li>
                                <li><strong>제작상태</strong>{movieItem.moviePrdtStat} </li>
                                <li><strong>일반영화</strong>{movieItem.movieType} </li>
                                <li><strong>관람등급</strong>{movieItem.watchGradeNm} </li>
                                <li><strong>상영시간</strong>{movieItem.showTm}분</li>
                               <li><strong>제작국가</strong>{movieItem.repNationCd} </li>
                                <li><strong>감독</strong>{movieItem.director} </li>
                                <li><strong>장르</strong>{movieItem.genre} </li>
                                <li><strong>배급사</strong>{movieItem.dtNm}</li>
                            </ul>
                        </div>
                    </article>
                    <article className="movie-list">
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
                                    <th>영화명</th>
                                    <th>장르</th>
                                    <th>누적 관객수</th>
                                    <th>순위 증감율</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map ( movie => 
                                    <tr key={movie.rank}
                                        onMouseOver = {()=>this.handleOver(movie.rank)}  
                                        onMouseOut = {this.handleOut}
                                    >

                                        <td>{movie.rank}</td>
                                        <td>{movie.movieNm}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.audiCnt} </td>
                                        <td>{movie.rankInten}</td>
                                    </tr>)
                                }
                                {/* tr로 데이터 불러오기 */}
                            </tbody>
                        </table>
                    </article>
                </div>
            </div>
        );
    }
}

export default Test5;