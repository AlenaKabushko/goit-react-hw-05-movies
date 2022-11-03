import TrendItem from 'components/TrendItem/TrendItem';

function TrendList({ trendMovies }) {
  console.log(trendMovies, 'from ul');
  return (
    <ul>
      {trendMovies.map(movie => (
        <TrendItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default TrendList;
