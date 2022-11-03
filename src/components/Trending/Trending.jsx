import TrendList from '../TrendList/TrendList';
import { useEffect, useState } from 'react';
import { Request } from '../Request/Request';

function Trending() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    console.log('useeffect');
    const controller = new AbortController();

    Request().then(response => {
      console.log(response.results, 'from effect');
      setTrendMovies(response.results);
    });

    return () => {
      console.log('otmen');
      controller.abort();
    };
  }, []);
  return (
    <>
      <div>
        <h1>Trending today</h1>
      </div>
      <TrendList trendMovies={trendMovies} />
    </>
  );
}

export default Trending;
