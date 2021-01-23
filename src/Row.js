import React, {useState, useEffect} from 'react'
import axios from './axios';

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  console.table(movies);  

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters">
        {/* several poster rows */}

        {movies.map(movies => (
          <img src={baseUrl + movies.poster_path} alt={movies.name} />
        ))}
      </div>
    </div>
  )
}

export default Row;
