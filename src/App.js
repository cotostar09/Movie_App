import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';





class App extends Component {

  // Render : componentWillMount() => render() => componentDidMount()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate => render() => componentDidUpdate()
  

  componentDidUpdate(){
    console.log('did update')
    
  }

  componentWillMount(){
    console.log('will mount')
    this._getMovies()
  }

  componentDidMount(){
    console.log('did mount')
    

    /*setTimeout(() =>{   // n 초마다 상태 변경 old style: function() {}
      this.setState({   //state 변경
        greeting:'hello again!',
        movies: [
          ...this.state.movies, //이전 movies 데이터들을 의미.
          {
            title : "The Monster",
            contents : "주인공이 괴물로부터 딸을 찾고자 하는 영화"
          }
        ]
      })
      
    }, 2000 )*/
  }

  state = {   // state가 변경 될때마다 render() 호출
  }

  _renderMovies = () =>{
    const movies =  this.state.movies.map( (movie , index)=> {
      
      return <Movie 
        title={movie.title_english} 
        poster = {movie.medium_cover_image} 
        genres = {movie.genres} 
        synopsis = {movie.synopsis} 
        key = {index}/>;
    })
    return movies
  }   //End _renderMovies

   _getMovies = async () => { //async await
    const movies = await this._callApi();
    this.setState({
      movies : movies
    })
  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    console.log('did render')
    console.log(this.state.movies)
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'loading'  }
      </div>
    );
  } //End render
}

export default App;
