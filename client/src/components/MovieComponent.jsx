import React from 'react';

class MovieComponent extends React.Component {
  render (){
    if(!this.props.movie){
      return null;
    }

    return(
      <div>
        {this.props.movie}
        {console.log(this.props)}
      </div>
      )
  }
}

export default MovieComponent;