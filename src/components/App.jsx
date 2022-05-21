import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage';
import Navigation from './Navigation/Navigation';
import Movie from './Movie';
import Cast from './Movie/Cast/Cast';
import Review from './Movie/Review/Review';

import { getTrendingApi, getSearchedApi, } from 'utils/Api';
import { useState, useEffect } from 'react';

export const App = () => {
  const [trending, setTrending] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieId, setMovieId] = useState(null);
  // const [movie, SetMovie] = useState(null);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTrendingApi()
      .then(({ data }) => {
        setTrending(data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if(!searchedMovie) {
      return
    } else{
      getSearchedApi(searchedMovie)
      .then(({data})=>{setSearchResults(data.results)})
      .catch(err => {
        console.error(err);
      });
    }
  
  }, [searchedMovie]);

  const handleonSubmit = movie => {
    setSearchedMovie(movie);
  };

  const handleClick = id => {
    setMovieId(id)
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage trending={trending} onClick={handleClick}/>}></Route>
        <Route
          path="/movies"
          element={
            <MoviesPage
              results={searchResults}
              onSubmit={handleonSubmit}
              onClick={handleClick}
            />
          }
        ></Route>
        <Route path='/movies/:id' element={<Movie movieId={movieId}/>}>

        <Route path="cast" element={<Cast movieId={movieId}/>} />
          <Route path="reviews" element={<Review movieId={movieId}/>} />
          </Route>
      </Routes>
    </>
  );
};
