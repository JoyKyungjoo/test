import React, { Component } from 'react';

class Test4Sub extends Component {
    render() {
        const {movie,onRemove} = this.props
        return (
            <>
            {/* 위와 같이 pragment 사용함으로 인해 <div>태그는 노출되지 않음!
                묶어주는 역할만 할 뿐, 다른 역할은 하지 않음! */}
                <article>
                    <div className="left">
                        <img src={movie.poster} alt="영화 포스터" />
                    </div>
                    <div className="right">
                        <h3>{movie.title}</h3>
                        <ul>
                            <li>출연진 : {movie.actor}</li>
                            <li>감독 : {movie.director}</li>
                            <li>개봉일 : {movie.date}</li>
                        </ul>
                        <button onClick={() => onRemove(movie.no)}>제거</button>
                    </div>
                </article>
            </>
        );
    }
}

export default Test4Sub;