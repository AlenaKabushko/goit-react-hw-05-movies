import { useEffect, useState } from 'react';
import { RequestTrend } from '../Request/Request';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Box from 'components/Box';
import PaginatedItems from '../Pagination/Pagination';

function Trending() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    Loading.pulse('Loading');

    RequestTrend(page)
      .then(response => {
        setTrendMovies(response.results);
        setTotalPage(response.total_pages);
      })
      .catch(error =>
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        )
      )
      .finally(Loading.remove());
  }, [page]);

  const onLoadMore = e => {
    return setPage(e.selected + 1);
  };

  return (
    <Box bg="#ffe4e4" flexDirection="column">
      <h1>Trending today</h1>
      <PaginatedItems
        itemsPerPage={20}
        movies={trendMovies}
        allPage={totalPage}
        currentPage={page}
        onLoadMore={onLoadMore}
      />
    </Box>
  );
}

export default Trending;
