function TrendItem({ movie }) {
  return (
    <li>
      <a href="/">{movie.title ?? movie.name}</a>
    </li>
  );
}

export default TrendItem;
