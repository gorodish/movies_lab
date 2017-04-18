import React from 'react';
import MovieSearch from '../components/MovieSearch';
import MovieDetail from '../components/MovieDetail';

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      movies: []
    }
  }

  performSearch(query){
    const URL = "http://www.omdbapi.com/?s=" + query
    const request = new XMLHttpRequest();
    request.open("GET", URL);
    request.onload = () => {
      var movies = JSON.parse(request.responseText);
      console.log(movies.Search);
      this.setState({movies:movies.Search});
    };
    request.send();
  }

  render() {
    return(
      <div>
      <MovieSearch searchFunction={this.performSearch.bind(this)} />
      <h1> Movie container</h1>
      <MovieDetail movies={this.state.movies} />
      </div>
      );
  };
}

export default MovieContainer;