import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineNoPhotography } from 'react-icons/md';
import { ItemStyle, TitleStyle } from './TrendItem.styled';

function TrendItem({ movie }) {
  const location = useLocation();

  const { id, title, name, poster_path } = movie;
  
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <ItemStyle>
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
        <TitleStyle>{title ?? name}</TitleStyle>
      </ItemStyle>
    </Link>
  );
}

export default TrendItem;

TrendItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
