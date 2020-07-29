import React from "react";
import "./movie.css";

function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.banner} />
      <label>
        {props.name} {props.likes}
      </label>
    </div>
  );
}

export default Movie;
