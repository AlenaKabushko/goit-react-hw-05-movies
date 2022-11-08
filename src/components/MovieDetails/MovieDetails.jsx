import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RequestMovieDetails } from '../Request/Request';
import MovieDescr from '../MovieDescr/MovieDescr';

function MovieDetails() {
  const { id } = useParams();
  console.log('MovieDetails work');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log('useEffect show IDParams', id);

    RequestMovieDetails(id).then(response => {
      console.log('detali', response);
      setDetails(response);
    });
  }, [id]);

  if (!details) return;

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <MovieDescr data={details} />
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
