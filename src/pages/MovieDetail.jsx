import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./movieDetail.css";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const fetchSingleMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b043b1dc1d5cdd85bb488258ad0acd38&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
        console.log(json);
      });
  };

  /*const fixRating = () => {
    const rating = movie.vote_average
     return rating.toFixed(1)
  }*/
  useEffect(() => fetchSingleMovie(), []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}>
      <div>
        <Link className="goBackLink" to="/">
          👈 Movies
        </Link>
      </div>
      <div className="grid-content">
      <img
        className="small-image"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt=""
      />
      <div className="movie-content">
      <h1 className="title">{movie.title}</h1>
      <p className="rating">⭐ {movie.vote_average}</p>
      <p className="description">{movie.overview}</p>
    </div>
    </div>
    </div>
  );
};
// {
//   "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": ["w300", "w780", "w1280", "original"],
//     "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//     "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//     "profile_sizes": ["w45", "w185", "h632", "original"],
//     "still_sizes": ["w92", "w185", "w300", "original"]
//   }
// }
