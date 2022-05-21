import { getCastApi } from 'utils/Api';
import { useState, useEffect } from 'react';

const Cast = ({ movieId }) => {

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    {
      if (!cast) {
        getCastApi(movieId)
          .then(data => {
            setCast(data.data.cast);
          })
          .catch(() => {
            setError(true);
          });
      }
    }
  }, [cast]);

  return (
    <>
      {error && <p>Произошла ошибка</p>}
      {cast ? (
        <ul>
          {cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                  alt="movie"
                  width="100px"
                  //   className={s.poster}
                />
                <p>{el.name}</p>
                <p>character: {el.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default Cast;
