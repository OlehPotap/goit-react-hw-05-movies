import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieApi } from 'utils/Api';
import s from './movie.module.css';

const Movie = ({ movieId }) => {
  // const [loading, setLoading] = useState(false)
  //   const [savedId, setSaveId] = useState(movieId)
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    {
      if (!movie) {
        getMovieApi(movieId)
          .then(data => {
            setMovie(data);
          })
          .catch(() => {
            setError(true);
          });
      }
    }
  }, [movie]);

  return (
    <>
      {error && <p>Произошла ошибка</p>}
      {movie ? (
        <>
          <div className={s['film-box']}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.data.poster_path}`}
              alt="movie"
              width="200px"
              className={s.poster}
            />
            <div className={s.film_description}>
              <h2>{movie.data.original_title}</h2>
              <p>{movie.data.overview}</p>
              <ul className={s.genresList}>
                <h2>Genres:</h2>
                {movie.data.genres.map(el=>{
                    return <li key={el.id}>{el.name}</li>
                })}
              </ul>
            </div>
          </div>
          <div className={s.container}>
            <Link to="cast" className={s.link}>
              Cast
            </Link>
            <Link to="reviews" className={s.link}>
              Review
            </Link>
          </div>
          <Outlet/>
        </>
      ) : (
        <p>Loding...</p>
      )}
    </>
  );
};

export default Movie;
