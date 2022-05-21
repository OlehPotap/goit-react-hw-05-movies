import { getReviewApi } from 'utils/Api';
import { useState, useEffect } from 'react';

const Review = ({ movieId }) => {
  const [rev, setRev] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    {
      if (!rev) {
        getReviewApi(movieId)
          .then(data => {
            setRev(data.data.results);
          })
          .catch(() => {
            setError(true);
          });
      }
    }
  }, [rev]);

  return (
    <>
      {error && <p>Произошла ошибка</p>}
      {rev ? <ul>{rev.map(el=>{
          return <li key={el.id}>
              <h4>{el.author}</h4>
              <p>{el.content}</p>
          </li>
      })}</ul> : <p>Loading...</p>}
    </>
  );
};
export default Review;
