import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <h1>Hello This is a netflix clone app</h1>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow 
       />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}  />
    </div>
  )
};
export default App;
