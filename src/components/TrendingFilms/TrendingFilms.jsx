import { trendsMovie } from '../../shared/services/Movies';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../TrendingFilms/TrendingFilms.module.css';

const TrendsMovie = () => {
  const [data, setData] = useState({
    posts: [],
    loading: false,
    error: null,
  });
  const location=useLocation()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const newData = await trendsMovie();
        setData(() => {
          return {
            posts: newData.results,
            loading: false,
            error: null,
          };
        });
      } catch (error) {
        setData(prevState => {
          return {
            ...prevState,
            loading: false,
            error: error.message,
          };
        });
      }
    };
    fetchPosts();
  }, []);
  const filmName = data.posts.map(item => {
    return (
      <li key={item.id} className={style.link__item}>
        <Link to={`movies/${item.id}`} className={style.link} state={{from: location}}>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}width="400px" alt={item.overview}></img>
          <p>{item.original_title}</p>
        </Link>
      </li>
    );
  });
  return (
    <>
      <p>Trending Today</p>
      <ul className={style.filmList}>{filmName}</ul>
    </>
  );
};
export default TrendsMovie;
