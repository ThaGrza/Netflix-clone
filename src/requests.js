import REACT_API_KEY from 'react-dotenv';

 const requests = {
   fetchTrending: `/trending/all/week?api_key=${REACT_API_KEY}&language=en-us`,
   fetchNetflixOriginals: `/discover/tv?api_key=${REACT_API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${REACT_API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=27`,
   fetchDocumentariesMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=99`,
   fetchRomanceMovies: `/discover/movie?api_key=${REACT_API_KEY}&with_genres=10749`
 }

 export default requests;
