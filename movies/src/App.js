import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css'
// import Spinner from './childComp/spinners/Spinners'
// const loading = () => <Spinner />;


function App() {
  const [movies, setMovies] = useState([])
  // const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=ee87dda2afc7419c76d70bdf7ae50282&language=en-US&page=1`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading={"Movies"}></Header>
      </div>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
    </div>
  );
}

export default App;
