import { useState, useEffect } from "react"
export const MoviesList = () => {
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=b043b1dc1d5cdd85bb488258ad0acd38&language=en-US&page=1"
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        fetch(URL)
        .then(response => response.json())
        .then((json) => {
            setMovies(json.results)
            console.log(json)
        })
    }
   
    useEffect(() => fetchMovies(),[])
    
return (
    <div className="startPage">
        {movies.map((movie) => (
        <div key={movie.id}>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
        </div>  
        ))}
    </div>
)
}
//importera link och wrappa runt image så att varje bild blir en länk