import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div style = {{backgroundImage: "linear-gradient(15deg, black, rgb(97, 9, 13))"}} className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link style = {{backgroundColor: " rgba(10, 10, 10, 0.733)"}} className="btn btn-dark" to={'/movie/' + movie.imdbID}>
            Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
