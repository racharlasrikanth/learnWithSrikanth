import React from "react";
import Movie from "../movie/movie";
import "./movies.css";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <div className="movies-section-1">
          <Movie
            className="card"
            name="HarryPotter"
            likes="120M"
            banner="https://i.pinimg.com/originals/69/b9/02/69b902dd7c927981e2ca757658d22e01.jpg"
          />

          <Movie
            name="BeautyAndTheBeast"
            likes="12M"
            banner="https://wallpapersite.com/images/wallpapers/beauty-and-the-beast-1440x2560-2017-hd-4k-8k-6368.jpg"
          />

          <Movie
            name="TheCircle"
            likes="3M"
            banner="https://m.media-amazon.com/images/M/MV5BM2M3Yzg5NDUtNDc4MC00NzA5LTlmNzYtMWJkNTk0ZDk1NTdlXkEyXkFqcGdeQXVyNjAwOTYzMjM@._V1_.jpg"
          />
        </div>
        <div className="movies-section-2">
          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://m.media-amazon.com/images/M/MV5BMzIxOTQyODU1OV5BMl5BanBnXkFtZTcwMDQ4Mjg4Nw@@._V1_.jpg"
          />

          <Movie
            name="AvengersEndgame"
            likes="312M"
            banner="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
          />

          <Movie
            name="Jaanu"
            likes="3M"
            banner="https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2020/03/12/Sharwanand-and-Samanthas-Jaanu-Movie-is-now-streaming-on-Amazon-Prime-Video.jpg?resize=1920%2C2560&quality=90&zoom=1&ssl=1"
          />
        </div>
        <div className="movies-section-3">
          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://m.media-amazon.com/images/M/MV5BMTM4NTg1OTE5N15BMl5BanBnXkFtZTgwOTA0MjA2MDE@._V1_.jpg"
          />

          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://wallpapercave.com/wp/wp4019377.jpg"
          />

          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b267c849271771.58af91b7a5471.jpg"
          />
        </div>
        <div className="movies-section-4">
          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://m.media-amazon.com/images/M/MV5BYzU4ZWVmMGMtMDcyNi00YjQ4LWIwMDAtMGVmNTFkNjc1MzFjXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"
          />

          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://images-na.ssl-images-amazon.com/images/I/61fhQI78YpL._SY606_.jpg"
          />

          <Movie
            name="perksWallPower"
            likes="1M"
            banner="https://www.filmibeat.com/ph-big/2016/06/_14649263823.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Movies;
