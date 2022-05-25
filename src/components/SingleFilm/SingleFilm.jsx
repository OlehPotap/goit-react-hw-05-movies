import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovie } from '../../shared/services/Movies';
import style from "../SingleFilm/SingleFilm.module.css"

const SingelFilmPage = () => {
  const [film, setFilm] = useState({
    film: [],
    genres:[],
    error: null,
  });
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const singleMovie = await getMovie(id);
        setFilm(prevState=>{
          return{
            ...prevState,
            film:singleMovie,
            genres: singleMovie.genres
          }
        });
        
      } catch (err) {
        setFilm(prevState => {
          return {
            ...prevState,
            error: err.message,
          };
        });
      }
    };
    fetchFilm();
  }, [id]);
  const genres=film.genres.map(item=>{
    return <li key={item.name}>{item.name}</li>
  })
  
  return (
    
    <>
      {film.error && <p>Что-то пошло не так</p>}
      <div className={style.film_detail}>
        <img
          src={`https://image.tmdb.org/t/p/original/${film.film.poster_path}`}
          alt=""
          width="400px"
          className={style.poster}
        />
        <div className={style.film_description}>
          <h2>{film.film.original_title}</h2>
          <p>{film.film.overview}</p>
          <ul className={style.genresList}>
            <h2>Genres:</h2>
            {genres}
          </ul>
        </div>
      </div>
      <div className={style.container}>
        <Link to="cast" className={style.link}>
          cast
        </Link>
        <Link to="reviews" className={style.link}>
          reviev
        </Link>
      </div>
      <Outlet />
      {location.pathname === '/' ? (
        ''
      ) : (
        <button onClick={goBack}>Go back</button>
      )}
    </>
  );
};
export default SingelFilmPage;
