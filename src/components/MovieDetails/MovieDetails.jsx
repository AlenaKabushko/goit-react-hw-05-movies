import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { RequestMovieDetails } from '../Request/Request';
import MovieDescr from '../MovieDescr/MovieDescr';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { LinkStyle } from './MovieDetails.styled';
import Box from 'components/Box';

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    Loading.pulse('Loading');

    RequestMovieDetails(id)
      .then(response => {
        setDetails(response);
      })
      .catch(error =>
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        )
      )
      .finally(Loading.remove());
  }, [id]);

  if (!details) return;

  return (
    <Box flexDirection="column" p={15} alignItems="start">
      <LinkStyle to={backLinkHref}>Back</LinkStyle>
      <MovieDescr data={details} />
      <Box>
        <LinkStyle to={`cast`} state={location.state}>
          Cast
        </LinkStyle>
        <LinkStyle to={`reviews`} state={location.state}>
          Reviews
        </LinkStyle>
      </Box>

      <Suspense fallback={Loading.pulse('Loading')}>
        {Loading.remove()}
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default MovieDetails;
