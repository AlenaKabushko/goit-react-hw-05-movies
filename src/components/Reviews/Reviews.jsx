import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RequestReviews } from '../Request/Request';

function Reviews() {
  const { id } = useParams();
  console.log('Reviews');
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    RequestReviews(id).then(response => {
      console.log('Reviews', response);
      setReviews(response);
    });
  }, [id]);

  if (!reviews) return;
  return (
    <div>
      {reviews.results.map(({ id, content, author_details }) => {
        return (
          <li key={id}>
            <h3>Author: {author_details.username}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </div>
  );
}

export default Reviews;
