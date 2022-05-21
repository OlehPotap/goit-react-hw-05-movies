import s from './movies-page.module.css';
import { useState } from 'react';
import SearchedMovieList from './SearchedMoviesList/SearchedMoviesList';

const MoviesPage = ({results, onSubmit, onClick}) => {

  const [movie, setMovie] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(movie)
  }

  const handleChange = (event) => {
    setMovie(event.target.value)
  }

  return (
    <>
    <form
      className={s.form}
      action="submit"
      onSubmit={handleSubmit}
    >
      <label htmlFor="movie">Movie</label>
      <input
        className={s.input}
        type="text"
        name="movie"
          value={movie}
          onChange={handleChange}
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
    <SearchedMovieList results={results} onClick={onClick}/>
    </>
  );
};

export default MoviesPage;
