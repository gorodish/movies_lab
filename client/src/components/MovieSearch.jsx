import React from 'react';

class MovieSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: null
    }
  }

  render() {
  

    return(
      <div>
      <input id="search-query" placeholder="Enter a movie name"></input>
      <button onClick={ () => {
       var input = document.querySelector("#search-query");
       this.props.searchFunction(input.value);
       
       // console.log(this.state);
       // {console.log(this.props.movies[0])}
     }}> Do search </button>
       </div>
       );
  }
}

export default MovieSearch;