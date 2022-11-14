import PropTypes from 'prop-types';
import TrendItem from 'components/TrendItem/TrendItem';
import { List } from './TrendList.styled';

function TrendList({ movies }) {
  return (
    <List>
      {movies.length === 0 ? (
        <p>
          Ooops, we didn't find the movie. Try changing the name and we'll try
          again.
        </p>
      ) : (
        movies.map(movie => <TrendItem key={movie.id} movie={movie} />)
      )}
    </List>
  );
}

export default TrendList;

TrendList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
