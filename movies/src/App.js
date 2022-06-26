import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css'
import Spinner from './childComp/spinners/Spinners'
import { ALERT_ERROR } from './childComp/alert/Alert' 
// import { BrowserRouter } from "react-router-dom";


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=ee87dda2afc7419c76d70bdf7ae50282&language=en-US&page=1`;

    setLoading(true)
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
    if(response.status !== 200){
      ALERT_ERROR("Đã xảy ra lỗi", "THÔNG BÁO")
    }
    setLoading(false)
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <Header heading="Movies"></Header>
      <div className='movie-app'>
        <div className='container'>
          {loading ? <Spinner /> : <div className='row'>
            <MovieList movies={movies} reloadData={getMovieRequest} />
          </div>}
        </div>
      </div>
    </>
  );
}

export default App;
