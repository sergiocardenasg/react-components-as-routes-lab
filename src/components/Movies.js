import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>
        <div className="actor">
          <h3>Name: {movie.title} </h3>
          <h4>Time: {movie.time} </h4>
          <p>Genres:</p>
          {movie.genres.map(genre =>
            <li>{genre}</li>
          )}
        </div>
        )}
    </div>
  );
};

export default Movies;
