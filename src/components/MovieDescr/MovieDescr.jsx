function MovieDescr({ data }) {
  console.log('descr', data);
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
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
      <h2>
        {title ?? name} ({release_date.slice(0, 4)})
      </h2>
      <p>User score: {vote_average}</p>
      <p>Genres: {genres.map(genr => genr.name).join(', ')}</p>
      <p>{overview}</p>
    </div>
  );
}

export default MovieDescr;
