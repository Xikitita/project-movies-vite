import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export const MoviesList = () => {
   const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b043b1dc1d5cdd85bb488258ad0acd38&language=en-US&page=1";
    const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results)
      })
  }

  useEffect(() => fetchMovies(), [])

  return (
    <div className="startPage">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt=""
            />
          </Link>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};
