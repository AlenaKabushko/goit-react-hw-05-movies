import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { RequestSearch } from '../Request/Request';
import PaginatedItems from '../Pagination/Pagination';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function SearchDetails({ inputMovie }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!inputMovie) return;
    Loading.pulse('Loading');

    RequestSearch(inputMovie, page)
      .then(response => {
        setMovies(response.results);
        setTotalPage(response.total_pages);
      })
      .catch(error =>
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        )
      )
      .finally(Loading.remove());
  }, [inputMovie, page]);

  const onLoadMore = e => {
    return setPage(e.selected + 1);
  };

  if (!movies) return;

  return (
    <>
      <PaginatedItems
        itemsPerPage={20}
        movies={movies}
        allPage={totalPage}
        currentPage={page}
        onLoadMore={onLoadMore}
      />
    </>
  );
}

export default SearchDetails;

SearchDetails.propTypes = {
  inputMovie: PropTypes.string,
};
