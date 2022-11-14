import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RequestReviews } from '../Request/Request';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    Loading.pulse('Loading');

    RequestReviews(id)
      .then(response => {
        setReviews(response);
      })
      .catch(error =>
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        )
      )
      .finally(Loading.remove());
  }, [id]);

  if (!reviews) return;

  return (
    <ul>
      {reviews.results.length === 0 ? (
        <p>Reviews is absent today</p>
      ) : (
        reviews.results.map(({ id, content, author_details }) => {
          return (
            <li key={id}>
              <h3>Author: {author_details.username}</h3>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default Reviews;
