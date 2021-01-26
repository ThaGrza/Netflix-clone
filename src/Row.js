import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters"> 
        {movies.map((movie) => (
        <img 
        key={movie.id} 
        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movies.name} 
        />
        ))} 
      </div>
    </div>
  )
}

export default Row;
