import Box from 'components/Box';
import PropTypes from 'prop-types';
import { MdOutlineNoPhotography } from 'react-icons/md';
import { DescrStyle } from './MovieDescr.styled';

function MovieDescr({ data }) {
  const {
    poster_path,
    name,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;

  return (
    <Box>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title ?? name}
        />
      ) : (
        <div>
          <MdOutlineNoPhotography size={250} />
        </div>
      )}
      <DescrStyle>
        <h2>
          {title ?? name} ({release_date.slice(0, 4)})
        </h2>
        <p>User score: {vote_average}</p>
        <p>Genres: {genres.map(genr => genr.name).join(', ')}</p>
        <p>{overview}</p>
      </DescrStyle>
    </Box>
  );
}

export default MovieDescr;

MovieDescr.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
