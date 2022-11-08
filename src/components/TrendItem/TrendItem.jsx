import { Link } from 'react-router-dom';

function TrendItem({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <li>{movie.title ?? movie.name}</li>
    </Link>
  );
}

export default TrendItem;
