 const API_KEY = "5f9630b664fee3f1c639e0ae94090867";

 const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=77`,
   fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
 }

 export default requests;