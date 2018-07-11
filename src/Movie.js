//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';        
import LinesEllipsis from 'react-lines-ellipsis';   
/** PropTypes 설명
 * 원래 React 안에 있었는데 분리됨 이제 따로 설치 해줘야함
 * 명령어 : yarn prop-types
 * input type 체크 가능
 * 필수 input prop 설정 가능 ( .isRequired )
 **/
import './Movie.css';

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}


function Movie({title, poster, synopsis, genres}){
    return (
        <div className = "Movie">
            <div className = "Movie__Column">
                <MoviePoster poster = {poster} alt = {title} />
            </div>
            <div className = "Movie__Column">
                <h1> {title} </h1>  
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key= {index} />)}
                </div>
                <div className = "Movie__Synopsis">
                    <MovieSysnopsis synopsis= {synopsis} />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src ={poster} className = "Movie__Poster" alt = {alt} title = {alt} />
    )
}

function MovieGenre({genre}){
    return (
        <span className = "Movie__Genre">{genre}</span>
    )

}

function MovieSysnopsis({synopsis}){
    return (
            <LinesEllipsis
                text={synopsis}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />
    )

}




export default Movie;